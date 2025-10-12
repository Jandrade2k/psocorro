import './Filtro.scss';

const Filtro: React.FC = () => {
    return (
        <div className="filtro-container">
            <h2>Filtro</h2>
            {/* Adicione aqui os elementos do filtro, como dropdowns, checkboxes, etc. */}
            <form action="#">
                <label>
                    Marca:
                </label>
                <select>
                    <option value="todas">Todas</option>
                    <option value="marca1">Control ID</option>
                    <option value="marca2">Henry</option>
                    <option value="marca3">RW Tech</option>
                    <option value="marca4">Top Data</option>
                </select>
                <label>Função: </label>
                <br />

                <input type="checkbox" />
                <label>Biometria</label>

                <input type="checkbox" />
                <label>Cartão de proximidade</label>

                <input type="checkbox" />
                <label>Facial</label>

                <input type="checkbox" />
                <label>Senha</label>

                <button>Desmarcar Todos</button>
            </form>
        </div>
    );
}

export default Filtro;