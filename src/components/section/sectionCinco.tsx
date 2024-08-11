'use client';

import { useEffect } from 'react';
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function SectionCinco() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section 
      id="contactanos"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden mt-0 md:mt-28 py-12">
      <div className="relative w-full min-h-screen flex items-center justify-center">
        {/* Imagen para pantallas móviles */}
        <div className="absolute inset-0 lg:hidden">
          <Image
            src="/img/sectionCincoMobile.png"
            alt="Contactanos"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="z-0"
          />
        </div>
        {/* Imagen para pantallas grandes */}
        <div className="absolute inset-0 hidden lg:flex items-center justify-center">
          <Image
            src="/img/sectionCinco.png" 
            alt="Contactanos"
            fill
            style={{ objectFit: "contain" }} 
            className="z-0 rounded-xl shadow-xl"
          />
        </div>
        {/* Contenido de la sección */}
        <div className="relative z-10 w-full h-auto flex flex-col items-center justify-center space-y-4 lg:hidden">
          <h2 className="text-3xl font-bold mb-2 text-white" data-aos="fade-up">CONTACTANOS</h2>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61558219634566" target="_blank" rel="noopener noreferrer" data-aos="fade-up">
              <FaFacebook size={70} className="text-blue-600" />
            </a>
            <a href="https://www.instagram.com/agencia_digitalwhiz/" target="_blank" rel="noopener noreferrer" data-aos="fade-up">
              <FaInstagram size={70} className="text-pink-600" />
            </a>
            <a href="https://wa.me/message/XWKCRXJ2NSCII1" target="_blank" rel="noopener noreferrer" data-aos="fade-up">
              <FaWhatsapp size={70} className="text-green" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
