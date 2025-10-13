import './Filtro.scss';
import SelectCustom from './SelectCustom';
import CheckBoxMenu from './CheckBoxMenu';
import { useState } from 'react';

type FiltroProps = {
  onChange?: (filtros: { marca: string; funcoes: string[] }) => void;
};

const options = [
  { value: '', label: 'Todas' },
  { value: 'Control ID', label: 'Control ID' },
  { value: 'Henry', label: 'Henry' },
  { value: 'RW Tech', label: 'RW Tech' },
  { value: 'Top Data', label: 'Top Data' },
  { value: 'Evo', label: 'Evo' },
];

const funcoes = [
  { value: 'biometria', label: 'Biometria' },
  { value: 'cartao_proximidade', label: 'Cartão de Proximidade' },
  { value: 'facial', label: 'Facial' },
  { value: 'senha', label: 'Senha' },
  { value: 'cartografico', label: 'Cartográfico' },
];

const Filtro: React.FC<FiltroProps> = ({ onChange }) => {
  const [selectedMarca, setSelectedMarca] = useState<string>(''); // estado do select
  const [selectedFuncoes, setSelectedFuncoes] = useState<string[]>([]); // estado dos checkboxes
  

  // Atualiza os filtros combinados
  const updateFilters = (marca: string, funcoes: string[]) => {
    onChange?.({ marca, funcoes });
  };

  const handleSelectChange = (value: string) => {
    setSelectedMarca(value);
    updateFilters(value, selectedFuncoes);
  };

  const handleCheckBoxChange = (values: string[]) => {
    setSelectedFuncoes(values);
    updateFilters(selectedMarca, values);
  };

  return (
    <div className="filtro-container">
      <h2>FILTRO</h2>
      <form action="#">
        <div className="marca-select">
          <SelectCustom
            label="Fabricante"
            options={options}
            onChange={handleSelectChange}
          />
        </div>
        <div className="funcao-select">
          <CheckBoxMenu
            label="Função"
            options={funcoes}
            value={selectedFuncoes}
            onChange={handleCheckBoxChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Filtro;
