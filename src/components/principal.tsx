import { FC } from "react";
import '../index.css';
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const Principal: FC = () => {
    return (
        <>
            <div className="container-fluid bg-img py-5 mt-5">
                <div className="row d-flex flex-column flex-md-row align-items-center px-4">
                    <div className="col-lg-6 order-2 order-lg-1 order-1 mt-2 mb-4 mb-md-0">
                        <div className="position-relative z-10">
                            <div className="d-flex align-items-center mb-4">
                                <div className="d-flex">
                                <i className='bx bxl-dev-to fs-2 text-white'></i>
                                </div>
                            </div>
                            <h1 className="h3-lg font-weight-bold mb-2 text-light text-center text-md-start typing-effect">
                                Hola,<span className="text-primary "> soy Clever Chavez</span>
                            </h1>
                            <p className="lead text-center text-lg-start mb- text-light">
                                Soy un ingeniero de software con experiencia en <span className="text-primary fw-semibold">React</span>, <span className="text-primary fw-semibold">TypeScript</span>, y <span className="text-primary fw-semibold">UI/UX</span>.
                                <span>Mi enfoque está en crear interfaces intuitivas y funcionales que generen resultados. Actualmente busco colaborar en proyectos desafiantes donde pueda aportar soluciones innovadoras y crecer profesionalmente.</span>
                            </p>
                            <div className="d-flex py-3 justify-content-lg-start justify-content-center">
                                <Link className="btn btn-outline-light px-lg-5 py-lg-2 fw-semibold" to={"contacto"}>¡Hablemos de tu proyecto!</Link>
                                <a href="/Curriculum.pdf" target="_blank" className="btn btn-outline-light px-lg-5 py-lg-2 ms-3 fw-semibold" data-aos="fade-left">Ver CV</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 order-2">
                        <div style={{ borderRadius: '20px', overflow: 'hidden' }}>
                            <ReactPlayer
                                url="/VideoPortafolio.mp4"
                                controls
                                width="100%"
                                height="auto"
                                loop={true}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Principal;
