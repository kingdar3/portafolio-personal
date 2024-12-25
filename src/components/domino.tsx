import { FC } from "react";
import 'boxicons/css/boxicons.min.css'; 

const tarjeta = [
    { id: 1, titulo: "HTML 5", nivel: "Intermedio", color: "#E44D26", logo: "bx bxl-html5" },
    { id: 2, titulo: "CSS 3", nivel: "Intermedio", color: "#1572B6", logo: "bx bxl-css3" }, 
    { id: 3, titulo: "BOOTSTRAP", nivel: "Intermedio", color: "#563D7C", logo: "bx bxl-bootstrap" },
    { id: 4, titulo: "REACT", nivel: "Intermedio", color: "#61DAFB", logo: "bx bxl-react" },
    { id: 5, titulo: "JAVA", nivel: "Intermedio", color: "#007396", logo: "bx bxl-java" },
    { id: 6, titulo: "JAVASCRIPT", nivel: "Intermedio", color: "#F7DF1E ", logo: "bx bxl-javascript" },
    { id: 7, titulo: "SPRING BOOT", nivel: "Basico", color: "#6DB33F", logo: "bx bxl-spring-boot" },
];

const Domino: FC = () => {
    return (
        <>
        <h3>DOMINO</h3>
        <div className="container">
            <div className="row">
                {tarjeta.map((tarjetas) => (
                    <div className="col-lg-3 col-md-4 col-6 my-3" key={tarjetas.id}>
                        <div className="card shadow-tarjeta text-center">
                            <i className={`${tarjetas.logo} icon`} style={{ color: tarjetas.color, fontSize: "150px" }}></i>
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: tarjetas.color }}>{tarjetas.titulo}</h5>
                                <p className="card-text" style={{ color: tarjetas.color }}>{tarjetas.nivel}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Domino;
