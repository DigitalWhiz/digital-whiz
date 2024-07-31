"use client";

import Image from "next/image";

export default function SectionCuatro() {
  return (
    <section
      id="sobreNosotros"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden mt-6 mb-6 sm:mt-16 sm:mb-16 lg:mt-28 lg:mb-28">
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative lg:hidden w-full h-full">
          <Image
            src="/img/sectionCuatroResponsive.png"
            alt="Sobre Nosotros"
            fill
            style={{ objectFit: "cover" }}
            className="rounded shadow-xl object-left"
          />
        </div>

        <div className="hidden lg:block relative w-full h-full">
          <Image
            src="/img/sectionCuatro.png"
            alt="Sobre Nosotros"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-xl shadow-xl"
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h2
            className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-extrabold text-white p-10"
            data-aos="fade-right"
            style={{ textShadow: "8px 5px 5px rgba(0,0,0,0.8)" }}>
            SOBRE NOSOTROS
          </h2>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl font-light text-white p-2 max-w-4xl"
            style={{ textShadow: "8px 5px 5px rgba(0,0,0,0.8)" }}>
            Bienvenido a nuestro mundo digital, que también puede ser el tuyo.{" "}
            <br />
            Si estás comenzando en este ámbito, has llegado al lugar indicado
            para dar el paso hacia el futuro. <br /> Somos una agencia de
            marketing integral, dedicada a ofrecer todos los servicios que tu
            marca necesita en una sola empresa. <br /> Diseñamos planes
            específicos para cada marca, adaptándonos a tus necesidades y a las
            de tu público. <br />
            Nuestro equipo está compuesto por especialistas en cada área, listos
            para ayudarte a potenciar tu negocio. <br /> Te asesoramos y guiamos
            en cada paso de tu camino en este nuevo mundo digital. <br />{" "}
            <strong> ¡HAZ CRECER TU EMPRESA CON NOSOTROS!📈</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
