import './Filtro.scss';
import SelectCustom from './SelectCustom';
import CheckBoxMenu from './CheckBoxMenu';
import { Value } from 'sass';

const options = [
    { value: 'todas', label: 'Todas' },
    { value: '1', label: 'Control ID' },
    { value: '2', label: 'Henry' },
    { value: '3', label: 'RW Tech' },
    { value: '4', label: 'Top Data' },
]

const funcoes = [
    { value: 'biometria', label: 'Biometria' },
    { value: 'cartao_proximidade', label: 'Cartão de Proximidade' },
    { value: 'facial', label: 'Facial' },
    { value: 'senha', label: 'Senha' },
    { value: 'cartografico', label: 'Cartográfico' },
];

const Filtro: React.FC = () => {
    return (
        <div className="filtro-container">
            <h2>FILTRO</h2>
            {/* Adicione aqui os elementos do filtro, como dropdowns, checkboxes, etc. */}
            <form action="#">
                <div className='marca-select'>
                    <SelectCustom label='Fabricante' options={options} />
                </div>
                <div className='funcao-select'>
                    <CheckBoxMenu label='Função' options={funcoes} />
                </div>
            </form>
        </div>
    );
}

export default Filtro;