import { Link } from "react-router";
import "./Header.scss";

type HeaderProps = {
  theme?: "bordo" | "branco";
}

const Header: React.FC<HeaderProps> = ({ theme = "bordo" }) => {
  return (
    <header className={`header header--${theme}`}>
      <div className="logo">
        <img src="logo.png" alt="Logo Ponto Socorro" />
      </div>
      <div className="menu">
        <nav>
         <ul>
      <li><Link to="/">Home</Link></li>

      <li className="dropdown">
        <Link to="/produtos/a">Soluções ▾</Link>
        <ul className="dropdown-menu">
          <li><Link to="/produtos/controle-acesso">Controle de Acesso</Link></li>
          <li><Link to="/produtos/relogio-ponto">Relógio de Ponto</Link></li>
          <li><Link to="/produtos/sistemas">Sistemas</Link></li>
        </ul>
      </li>

      <li><Link to="/sobre">Quem somos</Link></li>
      <li><Link to="/suporte">Suporte</Link></li>
      <li><Link to="/contato">Contato</Link></li>
    </ul>
        </nav>
      </div>
      <div className="orcamento">
        {/* Corrigir acentos */}
        <button>FACA SEU ORCAMENTO</button> 
      </div>
    </header>
  );
};

export default Header;
