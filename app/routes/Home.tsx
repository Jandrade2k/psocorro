import Header from "~/components/Header";
import "./Home.scss";
import Footer from "~/components/Footer";
import Carrossel from "~/components/Carrossel";

const Home: React.FC = () => {

  return (
    <div>
      <Header />
      <Carrossel />
      <div className="content-section">
        <h2>Bem-vindo ao nosso sistema</h2>
        <p>Conteúdo da página inicial</p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
