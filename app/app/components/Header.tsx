import "./Header.scss";

type HeaderProps = {
  theme?: "bordo" | "branco";
}

const Header: React.FC<HeaderProps> = ({ theme = "bordo" }) => {
  return (
    <header className={`header header--${theme}`}>
      <div className="logo">
        <img src="assets/logo.png" alt="Logo Ponto Socorro" />
      </div>
      <div className="menu">
        <nav>
         <ul>
      <li><a href="#">Home</a></li>

      <li className="dropdown">
        <a href="#">Soluções ▾</a>
        <ul className="dropdown-menu">
          <li><a href="#">Controle de Acesso</a></li>
          <li><a href="#">Relógio de Ponto</a></li>
          <li><a href="#">Sistemas</a></li>
        </ul>
      </li>

      <li><a href="#">Quem somos</a></li>
      <li><a href="#">Suporte</a></li>
      <li><a href="#">Contato</a></li>
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
