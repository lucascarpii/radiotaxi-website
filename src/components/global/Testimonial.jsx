import React from "react";

const testimonios = [
  {
    nombre: "Miguel A",
    empresa: "/assets/brands/Attentive.svg",
    comentario:
      "Siempre me preocupaba mi privacidad en línea, pero desde que uso esta plataforma, me siento más seguro y con mayor control sobre mis datos personales.",
    estrellas: 4,
  },
  {
    nombre: "Sara J",
    empresa: "/assets/brands/Trusty.svg",
    comentario:
      "Esta plataforma ha transformado por completo cómo administro mi flota. ¡Las herramientas son intuitivas y el equipo de soporte es increíblemente atento!",
    estrellas: 5,
  },
  {
    nombre: "Jaime R",
    empresa: "/assets/brands/Securely.svg",
    comentario:
      "Una solución excelente para cualquiera que busque optimizar operaciones y mejorar la eficiencia. ¡La recomiendo totalmente!",
    estrellas: 5,
  },
];


const renderStars = (cantidad) => {
  return Array.from({ length: 5 }).map((_, index) => (
    <ion-icon
      key={index}
      name={index < cantidad ? "star" : "star-outline"}
      className={`${index < cantidad ? "fill" : ""}`}
    ></ion-icon>
  ));
};

const Testimonial = () => {
  return (
    <section>
      <div className="mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8 py-24">
        <div>
          <p className="text-4xl tracking-tight font-medium text-black md:text-5xl font-display">
            Descubre las experiencias y <span className="sm:block">opiniones de nuestros primeros clientes</span>
          </p>
        </div>
        <ul className="mt-12 lg:mt-24 grid grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonios.map((testimonio, index) => (
            <li key={index}>
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex gap-x-1 text-accent-500">{renderStars(testimonio.estrellas)}</div>
                  <p className="lg:text-sm text-gray-500 mt-4">
                    {testimonio.comentario}
                  </p>
                </div>
                <footer className="mt-8">
                  <p className="lg:text-sm text-gray-500 font-display">
                    {testimonio.nombre}
                  </p>
                </footer>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Testimonial };
