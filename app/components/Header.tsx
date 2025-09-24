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
          <a>Home</a>
          <a>Soluçoes</a> {/* Corrigido o erro de digitação */}
          <a>Quem somos</a>
          <a>Suporte</a>
          <a>Contato</a>
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
