import Header from "~/components/Header";
import { useState, useEffect } from "react";
import "./Home.scss";

import cr1 from "../assets/cr_1.png";
import cr2 from "../assets/cr_2.png";
import cr3 from "../assets/cr_3.png";

import ClockIcon from "../assets/relogio-ponto.svg";

const Home: React.FC = () => {
  const imgs = [cr1, cr2, cr3];
  const [index, setIndex] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setImgWidth(window.innerWidth * 0.992);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const prev = () => setIndex((i) => (i === 0 ? imgs.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === imgs.length - 1 ? 0 : i + 1));

  return (
    <div>
      <Header />
      <div className="carrosel-wrapper" style={{ position: "relative", width: imgWidth, margin: "0 auto" }}>
        <button className="carrosel-arrow left" onClick={prev} aria-label="Anterior">
          &#8249;
        </button>
        <div className="carrosel" style={{ width: imgWidth, overflow: "hidden" }}>
          <div
            className="carrosel-track"
            style={{
              display: "flex",
              width: `${imgs.length * imgWidth}px`,
              transform: `translateX(-${index * imgWidth}px)`,
              transition: "transform 0.5s",
            }}
          >
            {imgs.map((img, i) => (
              <img
                key={i}
                className="carrosel-img"
                src={img}
                alt={`Slide ${i + 1}`}
                style={{
                  width: `${imgWidth}px`,
                  height: "600px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        </div>
        <button className="carrosel-arrow right" onClick={next} aria-label="Próximo">
          &#8250;
        </button>
      </div>
      <div className="card-section">
        <div className="card">
          <svg width="128px" height="128px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.06152 12C5.55362 8.05369 8.92001 5 12.9996 5C17.4179 5 20.9996 8.58172 20.9996 13C20.9996 17.4183 17.4179 21 12.9996 21H8M13 13V9M11 3H15M3 15H8M5 18H10" stroke="#800020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <h4>Relogio de Ponto</h4>
          <p>Controle de jornada de trabalho de forma prática e segura. Registre entradas, saídas e pausas dos colaboradores com precisão e facilidade.</p>
        </div>
        <div className="card">
          
        </div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </div>
  );
};

export default Home;
