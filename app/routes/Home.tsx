import Header from "~/components/Header";
import { useState } from "react";

import "./Home.scss";

const Home: React.FC = () => {

  const imgs = [
    "Imagem 1",
    "Imagem 2",
    "Imagem 3",
  ]

  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i == 0 ? imgs.length - 1 : i - 1));
  const next = () => setIndex((i) => (i == imgs.length - 1 ? 0 : i + 1));

  return (
    <div>
      <Header />
      <div className="carrosel">
        {/* Temporariamente estatico ate eu ter as imagens do carrosel */}
        <h1>{imgs[index]}</h1>
        <div style={{marginTop: "10px"}}>
          <button onClick={prev}>Anterior</button>
          <button onClick={next} style={{marginLeft: "10px"}}>Proximo</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
