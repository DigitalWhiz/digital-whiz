'use client';

import Image from "next/image";

export default function SectionTres() {
  return (
    <section
      id="#bienvenidos" 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src="/img/sectionTres1.png" 
            alt="fondoMundo"
            fill
            style={{ objectFit: "cover" }}
            className="rounded shadow-xl hidden md:block" 
          />
          <Image
            src="/img/sectionTresResponsive.png" 
            alt="fondoMundoResponsive"
            fill
            style={{ objectFit: "cover" }}
            className="rounded shadow-xl md:hidden" 
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="text-6xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-extrabold text-[#F64994] p-2 inline-block text-center"
            style={{ textShadow: "8px 5px 5px rgba(0,0,0,0.8)" }}
          >
            ¡BIENVENIDOS A NUESTRO <br /> MUNDO DIGITAL!
          </h1>
        </div>
      </div>
    </section>
  );
}
