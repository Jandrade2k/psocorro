import { useState } from "react";
import "./CheckBoxMenu.scss";

type Option = {
    label: string;
    value: string;
};

type CheckboxGroupProps = {
    label?: string;
    options: Option[];
    onChange?: (selected: string[]) => void;
};

function CheckboxGroup({ label, options, onChange }: CheckboxGroupProps) {
    const [selected, setSelected] = useState<string[]>([]);

    const handleChange = (value: string) => {
        const newSelected = selected.includes(value)
            ? selected.filter((v) => v !== value)
            : [...selected, value];
        setSelected(newSelected);
        onChange?.(newSelected);
    };

    const clearAll = () => {
        setSelected([]);
        onChange?.([]);
    };

    return (
        <div className="checkbox-group">
            {label && <span className="checkbox-label">{label}</span>}

            <div className="checkbox-list">
                {options.map((opt) => (
                    <label key={opt.value} className="checkbox-item">
                        <input
                            type="checkbox"
                            checked={selected.includes(opt.value)}
                            onChange={() => handleChange(opt.value)}
                        />
                        <span>{opt.label}</span>
                    </label>
                ))}
            </div>

            {selected.length > 0 && (
                <button className="clear-btn" onClick={clearAll}>
                    Desmarcar todos
                </button>
            )}
        </div>
    );
}
export default CheckboxGroup;
