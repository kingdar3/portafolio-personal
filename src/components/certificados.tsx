import { FC } from "react";

const Certificado: FC = () => {
    const certificaciones = [
        { 
            id: 1, 
            nombre: "Certificación CCNAv7: Introduction to Networks", 
            fecha: "Julio 2024", 
            pdfUrl: "certificado1.pdf",
            imagenUrl: "/img/certificado1.jpg" 
        },
        { 
            id: 2, 
            nombre: "Certificación CCNAv7: Switching, Routing, and Wireless Essentials", 
            fecha: "Febrero 2024", 
            pdfUrl: "certificado2.pdf",
            imagenUrl: "/img/certificado2.jpg" 
        },
    ];
    return (
        <div>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <h3>CERTIFICADOS</h3>
                    <p className="text-center mb-4">
                        Como ingeniero de software, estoy comprometido con la mejora continua y la adquisición de nuevas habilidades. 
                        Aquí puedes ver las certificaciones que he obtenido en áreas clave de redes y tecnología, lo que refleja mi dedicación para mantenerme actualizado y ofrecer soluciones innovadoras.
                    </p>
                    {certificaciones.map(certificado => (
                        <div key={certificado.id} className="col-lg-3 col-md-4 col-6 mt-4">
                            <div className="card h-100 " style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
                                <img src={certificado.imagenUrl} alt={`Imagen de ${certificado.nombre}`} className="card-img-top img-fluid" />
                                <h4>{certificado.nombre}</h4>
                                <p>{certificado.fecha}</p>
                                <a href={certificado.pdfUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                  Ver certificado
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certificado;
