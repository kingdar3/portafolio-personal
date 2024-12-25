import { FC } from "react";
import '../css/sobremi.css'
import Fortalezas from "./fortalezas";
const Sobremi: FC = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <h3>SOBRE MÍ</h3>
                    <div className="col-md-4">
                        <img src="" alt="imagen perfil" />
                    </div>
                    <div className="col-md-8">
                        <h4>Ingeniero de Software</h4>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="list-unstyled">
                                    <li> <i className='bx bx-chevron-right'></i><strong>Grado:</strong> <span>Ingeniero de software</span></li>
                                    <li> <i className='bx bx-chevron-right'></i><strong>Edad:</strong> <span>25</span></li>
                                    <li> <i className='bx bx-chevron-right'></i><strong>Telefono:</strong> <span>+51 940326605</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                            <ul className="list-unstyled">
                                    <li> <i className='bx bx-chevron-right '></i><strong>Correo:</strong> <span>sap.clever.14@gmail.com</span></li>
                                    <li> <i className='bx bx-chevron-right'></i><strong>Dirección:</strong> <span>Lima, Perú</span></li>
                                    <li> <i className='bx bx-chevron-right'></i><strong>Web:</strong> <span><a href="" className="text-decoration-none">portafolio-c86d7.web.app</a></span></li>
                                </ul>
                            </div>
                        </div>
                        <p>Soy una persona responsable y comprometida con alcanzar los objetivos trazados, siempre con dedicación y esfuerzo. Como apasionado del desarrollo web, tengo un profundo interés por el aprendizaje constante y una misión clara: transformar desafíos en soluciones digitales fascinantes. Me caracterizo por mi creatividad y entusiasmo por asumir nuevos retos para seguir creciendo tanto personal como profesionalmente.</p>
                    </div>
                </div>
            </div>
            <Fortalezas/>
        </>
    );
};

export default Sobremi;
