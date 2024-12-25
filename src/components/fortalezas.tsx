import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import '../css/sobremi.css'

const Fortalezas: FC = () => {
  const fortalezas = [
    {
      id:1,
      titulo: "Trabajo en equipo",
      descripcion: "Colaboro eficazmente para lograr objetivos comunes.",
      imagen: "/img/trabajo-equipo.jpg",
    },
    {
      id:2,
      titulo: "Responsable",
      descripcion: "Cumplo con mis compromisos de manera puntual y efectiva.",
      imagen: "/img/responsable.jpg",
    },
    {
      id:3,
      titulo: "Innovador",
      descripcion: "Busco siempre nuevas formas de resolver problemas.",
      imagen: "/img/innovador-web.jpg",
    },
    {
      id:4,
      titulo: "Creatividad",
      descripcion: "Aporto ideas únicas y frescas para proyectos.",
      imagen: "/img/creatividad-ix.jpg",
    },
    {
      id:5,
      titulo: "Adaptabilidad",
      descripcion: "Me ajusto fácilmente a diferentes situaciones y desafíos.",
      imagen: "/img/adaptable-web.jpg",
    },
  ];

  return (
    <>
      <div className="container mt-lg-5">
        <h3 className="text-center">FORTALEZAS</h3>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}  // Número de slides visibles al mismo tiempo
          navigation
          pagination={{ clickable: true }} // Activa la paginación
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}  // Habilita el loop para hacer un slider infinito
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {fortalezas.map((fortaleza) => (
           <SwiperSlide key={fortaleza.id}>
           <div className="card h-100">
             <img
               src={fortaleza.imagen}
               className="card-img-top"
               alt={fortaleza.titulo}
             />
             <div className="card-body">
               <h5 className="card-title">{fortaleza.titulo}</h5>
               <p className="card-text">{fortaleza.descripcion}</p>
             </div>
           </div>
         </SwiperSlide>
         
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Fortalezas;
