import { FC } from "react";

const Footer: FC = () => {
  return (
    <>
      <footer className="bg-dark text-light py-4">
        <div className="container">
          {/* Sección de Proyectos */}
          <div className="row">
            <div className="col-12 col-md-6 text-center text-md-start">
              <h5>Proyectos Destacados</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://estudio-contable-chavez.web.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-decoration-none"
                  >
                    Estudio Contable
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-primary text-decoration-none"
                  >
                    Floreria Green Flower's
                  </a>
                </li>

              </ul>
            </div>

            {/* Sección de Contacto */}
            <div className="col-12 col-md-6 text-md-start text-center">
              <h5 className="">Contacto</h5>
              <ul className="list-unstyled">
                <li>
                  <strong>Teléfono:</strong> +51 940326605
                </li>
                <li>
                  <strong>Correo:</strong>{" "}
                  <a href="mailto:sap.clever.14@gmail.com" className="text-light text-decoration-none">
                    sap.clever.14@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="text-center py-3">
          <h5>Redes Sociales</h5>
          <ul className="list-unstyled d-flex justify-content-center">
            <li className="mx-3">
              <a
                href="www.linkedin.com/in/clever-julian-chavez-estrada-768471277"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none"
              >
                <i className="bx bxl-linkedin"></i> {/* Ícono de LinkedIn */}
              </a>
            </li>
            <li className="mx-3">
              <a
                href="https://github.com/clevermc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <i className="bx bxl-github"></i> {/* Ícono de GitHub */}
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center py-3">
          <small>&copy; 2024 Clever Chavez Estrada. Todos los derechos reservados.</small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
