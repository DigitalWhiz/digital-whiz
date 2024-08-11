import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-pink-500 to-purple-300 text-white py-12">
      <div className="container mx-auto max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold">Digital Whiz</h1>
          <p className="mt-4">
            ¿Tienes preguntas? <br /> Contáctanos de Lunes a Viernes de 9:00 am a 20:00 pm
          </p>
          <h3 className="mt-4 text-lg">+543571345450</h3>
          <Link href="https://wa.me/message/XWKCRXJ2NSCII1" target="_blank" rel="noopener noreferrer">
            <button className="mt-4 bg-white text-purple-900 px-4 py-2 rounded hover:bg-accent hover:text-white">
              Solicitud de cotización
            </button>
          </Link>
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-semibold">EMPRESA</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/systemwork" className="hover:text-accent">Sobre la Agencia</Link>
            </li>
            <li>
              <Link href="/systemwork" className="hover:text-accent">Sistema de trabajo de la Agencia</Link>
            </li>
            <li>
              <Link href="/planes" className="hover:text-accent">Planes</Link>
            </li>
            <li>
              <Link href="/systemwork#Coverage" className="hover:text-accent">Cobertura de Servicios</Link>
            </li>
            <li>
              <Link href="/preguntas" className="hover:text-accent">Preguntas Frecuentes</Link>
            </li>
            <li>
              <Link href="/systemwork#PrivacyPolicy" className="hover:text-accent">Politica de Privacidad</Link>
            </li>
            <li>
              <Link href="/systemwork#TerminosCondiciones" className="hover:text-accent">Terminos y Condiciones</Link>
            </li>
          </ul>
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-semibold">SERVICIOS</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/planes" className="hover:text-accent">Diseño y Desarrollo Web</Link>
            </li>
            <li>
              <Link href="/planes" className="hover:text-accent">Marketing Digital</Link>
            </li>
            <li>
              <Link href="/planes" className="hover:text-accent">Branding</Link>
            </li>
            <li>
              <Link href="/planes" className="hover:text-accent">Campañas Publicitarias - ADS</Link>
            </li>
            <li>
              <Link href="/planes" className="hover:text-accent">E-commerce</Link>
            </li>
            <li>
              <Link href="/planes" className="hover:text-accent">Email Marketing</Link>
            </li>
          </ul>
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-semibold">REDES SOCIALES</h3>
          <div className="mt-4 flex justify-center sm:justify-start space-x-4">
            <Link href="https://www.instagram.com/agencia_digitalwhiz/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              <FaInstagram size={25} />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61558219634566" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              <FaFacebook size={25} />
            </Link>
            <Link href="https://wa.me/message/XWKCRXJ2NSCII1" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              <FaWhatsapp size={25} />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-white pt-4">
        <div className="container mx-auto max-w-screen-lg flex flex-col sm:flex-row justify-between items-center text-sm">
          <span className="mb-2 sm:mb-0 text-center sm:text-left font-bold">
            © 2024 Digital Whiz. Todos los derechos reservados.
          </span>
          <div className="flex space-x-4">
            <span className="font-extrabold text-xl">Agencia Digital Whiz</span>
            <span>|</span>
            <Link href="/systemwork#TerminosCondiciones">Terminos y condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
