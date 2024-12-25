import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ContactoPage from "../pages/contactoPage";
import InicioPage from "../pages/InicioPage";
import CertificadoPage from "../pages/certificadosPage";
import SobremiPage from "../pages/sobremiPage";
import ErrorPage from "../pages/errorPage";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children: [
                { index: true, element: <InicioPage /> },
                { path: "/inicio", element: <InicioPage /> },
                { path: "/sobremi", element: <SobremiPage /> },
                { path: "/certificados", element: <CertificadoPage /> },
                { path: "/contacto", element: <ContactoPage /> },
                { path: "*", element: <ErrorPage /> },
            ]
        },

    ]
);