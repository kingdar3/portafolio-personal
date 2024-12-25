import { FC, useState } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    
    const handleNavClick = () => {
        setIsNavOpen(false);
    };

    return (
        <nav className="navbar bg-dark navbar-expand-lg fixed-top" data-bs-theme="dark">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded={isNavOpen ? "true" : "false"}
                    aria-label="Toggle navigation"
                    onClick={() => setIsNavOpen(!isNavOpen)} // Alterna el estado de apertura
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarNavDropdown">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link text-white fw-bold" onClick={handleNavClick}>INICIO</Link>
                        </li>
                        <li className="nav-item">
                        <Link to={"sobremi"} className="nav-link text-white fw-bold" onClick={handleNavClick}>SOBRE MI</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"certificados"} className="nav-link text-white fw-bold" onClick={handleNavClick}>CERTIFICADOS</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"contacto"} className="nav-link text-white fw-bold" onClick={handleNavClick}>CONTACTO</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
