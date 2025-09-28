import Header from "~/components/Header";
import "./Home.scss";
import Footer from "~/components/Footer";
import Carrossel from "~/components/Carrossel";
import Card from "~/components/Card";
import { ClockIcon, FileStack } from "lucide-react";

const Home: React.FC = () => {

  return (
    <div>
      <Header />
      <Carrossel />
      <div className="content-section">
        <h2>Bem-vindo ao nosso site</h2>
        <div className="cards">
          <Card
            title="Relógio de Ponto"
            description="Relógio de ponto digital para controle de jornada."
            icon={<ClockIcon />}
          />
          <Card
            title="Gerenciamento de Arquivos"
            description="Sistema de gerenciamento de arquivos para sua empresa."
            icon={<FileStack />}
          />
          <Card
            title="Relógio de Ponto"
            description="Relógio de ponto digital para controle de jornada."
            icon={<ClockIcon />}
          />
          <Card
            title="Relógio de Ponto"
            description="Relógio de ponto digital para controle de jornada."
            icon={<ClockIcon />}
          />
          <Card
            title="Relógio de Ponto"
            description="Relógio de ponto digital para controle de jornada."
            icon={<ClockIcon />}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
