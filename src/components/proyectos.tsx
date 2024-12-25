import { FC } from "react";
import { faBars, faDatabase, faPenToSquare, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../index.css'; // Asegúrate de importar el archivo CSS
import { Link } from "react-router-dom";

const Proyectos: FC = () => {
    return (
        <>
            <h3>PROYECTOS</h3>
            <div className="container">
                <div className="row">
                    {/* Sidebar visible en todos los tamaños de pantalla */}
                    <div className="col-lg-3 col-3">
                        {/* Icono de menú visible solo en pantallas pequeñas */}
                        <div className="sidebar shadow d-flex flex-column d-md-block py-3" >
                            <p className="text-center mt-3 fw-bold ">Menu</p>
                            <ul className="nav flex-column d-flex align-items-center ">
                                <li className="nav-item ">
                                    <button
                                        className="btn btn-primary d-block d-md-none"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasMenu"
                                        aria-controls="offcanvasMenu"
                                    >
                                        <FontAwesomeIcon icon={faBars} />
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <Link to={'greenflowers'} className="nav-link active ">
                                        <FontAwesomeIcon icon={faSeedling} className="icono" />
                                        <p className="d-none d-lg-inline px-2 text-body">Green Flower's</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                  <Link to={"EstudioContable"}  className="nav-link" >
                                        <FontAwesomeIcon icon={faPenToSquare} className="icono" />
                                        <span className="d-none d-lg-inline px-2  text-body">Estudio contable</span>
                                        </Link>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <FontAwesomeIcon icon={faPenToSquare} className="icono" />
                                        <span className="d-none d-lg-inline px-2  text-body">Panaderia don thomas</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <span className="d-none d-lg-inline  text-body">Base de Datos</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Main content */}
                    <div className="col-lg-9 col-9">
                        <div className="">
                        </div>
                    </div>
                </div>
            </div>

            {/* Offcanvas para móvil */}
            <div className="d-md-none">
                <div
                    className="offcanvas offcanvas-start"
                    tabIndex={-1}
                    id="offcanvasMenu"
                    aria-labelledby="offcanvasMenuLabel"
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasMenuLabel">
                            Menú
                        </h5>
                        <button
                            type="button"
                            className="btn-close text-reset"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link to={'greenflowers'} className="nav-link active ">
                                    <FontAwesomeIcon icon={faSeedling} className="icono" />
                                    <span className=" px-2">Green Flower's</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                            <Link to={'greenflowers'} className="nav-link active ">
                                    <FontAwesomeIcon icon={faSeedling} className="icono" />
                                    <span className=" px-2">Green Flower's</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                            <Link to={'greenflowers'} className="nav-link active ">
                                    <FontAwesomeIcon icon={faSeedling} className="icono" />
                                    <span className=" px-2">Green Flower's</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <FontAwesomeIcon icon={faDatabase} />
                                    <span className="d-md-inline">Green Flower's</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Proyectos;
