import { faFigma, faGithub, faPhp, faUnity } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import '../habilidades.css'; 

const Habilidades: FC = () => {
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const handleMouseEnter = () => {
    setIsPaused(true); 
  };

  const handleMouseLeave = () => {
    setIsPaused(false); 
  };

  // Definimos los íconos y títulos sin id
  const tarjetas = [
    { icono: faUnity, titulo: "UNITY" },
    { icono: faDatabase, titulo: "MYSQL" },
    { icono: faPhp, titulo: "PHP" },
    { icono: faFigma, titulo: "FIGMA" },
    { icono: faGithub, titulo: "GITHUB" },
  ];

  return (
    <div>
      <h3>OTRAS HABILIDADES</h3>
      <div
        className="slider"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="slide-track"
          style={{
            animationPlayState: isPaused ? "paused" : "running", 
          }}
        >
          {/* Duplicamos las tarjetas para crear el bucle infinito */}
          {[...tarjetas, ...tarjetas, ...tarjetas, ...tarjetas, ...tarjetas].map((item, index) => (
            <div key={index} className="slide">
              <FontAwesomeIcon icon={item.icono} size="4x" />
              <h5>{item.titulo}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
