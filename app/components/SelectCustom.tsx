import "./SelectCustom.scss";

type SelectCustomProps = {
  label?: string;
  options: { value: string; label: string }[];
  onChange?: (value: string) => void;
  value?: string;
};

function SelectCustom({ label, options, onChange, value }: SelectCustomProps) {
  return (
    <div className="select-container">
      {label && <label className="select-label">{label}</label>}
      <select
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        className="select-input"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectCustom;
