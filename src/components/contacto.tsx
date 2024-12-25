import { FC, useEffect, useState } from "react";
import 'boxicons/css/boxicons.min.css';

// Extiende la interfaz Window para que TypeScript reconozca hbspt
declare global {
  interface Window {
    hbspt: any; // Declara hbspt como una propiedad del objeto global window
  }
}

const Contacto: FC = () => {
  // Estado para controlar la visibilidad del mensaje de éxito
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // Verifica si hbspt ya está disponible
    if (window.hbspt) {
      window.hbspt.forms.create({
        portalId: "48658977",
        formId: "b6675624-03aa-4e66-8f17-b73610f055de",
        target: "#contact-form", // El contenedor donde se va a renderizar el formulario
        onFormSubmit: () => {
          // Cambiar el estado cuando el formulario se haya enviado
          setFormSubmitted(true);
        }
      });
      return;
    }

    // Cargar el script externo de HubSpot Forms
    const script = document.createElement('script');
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.async = true;
    script.defer = true; // Asegura que se ejecute después de que el HTML esté cargado

    script.onload = () => {
      // Crear el formulario una vez que el script se haya cargado
      try {
        if (window.hbspt) {
          window.hbspt.forms.create({
            portalId: "48658977",
            formId: "b6675624-03aa-4e66-8f17-b73610f055de",
            target: "#contact-form", // El contenedor donde se va a renderizar el formulario
            onFormSubmit: () => {
              // Cambiar el estado cuando el formulario se haya enviado
              setFormSubmitted(true);
            }
          });
        }
      } catch (error) {
        console.error("HubSpot form creation failed:", error);
      }
    };

    // Agregar el script al documento
    document.body.appendChild(script);

    // Limpiar el script cuando el componente se desmonta
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container my-5">
      <div className="row">
        <h3>Contáctame</h3>

        {/* Mostrar el mensaje solo si el formulario se envió correctamente */}
        {formSubmitted && (
          <div className="alert alert-success" role="alert">
            ¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.
          </div>
        )}

        <div className="col-lg-4 d-flex align-items-center justify-content-center">
          <div className="row">
            <div className="col-3 d-flex justify-content-center align-items-center">
              <i className="bx bx-envelope text-primary fs-3"></i>
            </div>
            <div className="col-9 d-flex p-2">
              <div className="d-flex flex-column">
                <strong>Email:</strong>
                <span>sap.clever.14@gmail.com</span>
              </div>
            </div>
            <div className="col-3 d-flex justify-content-center align-items-center">
              <i className="bx bx-phone-call text-primary fs-3"></i>
            </div>
            <div className="col-9 d-flex p-2">
              <div className="d-flex flex-column">
                <strong>Telefono:</strong>
                <span>940326605</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-8 mt-4">
          <div id="contact-form"></div> {/* El contenedor donde se insertará el formulario */}
        </div>
      </div>
    </div>
  );
};

export default Contacto;
