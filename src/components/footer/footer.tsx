import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-pink-500 to-purple-300 text-white py-12 mt-0 sm:mt-10">
      <div className="container mx-auto text-center px-4">
        <p className="text-lg mb-6">
          Destaca tu negocio en el mundo digital con nosotros.
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://www.instagram.com/agencia_digitalwhiz/"
            className="text-xl text-pink-300 hover:text-pink-200 transition-colors duration-300">
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61558219634566"
            className="text-xl text-blue-500 hover:text-blue-400 transition-colors duration-300">
            <FaFacebook />
          </a>
          <a
            href="https://wa.me/message/XWKCRXJ2NSCII1"
            className="text-xl text-green-500 hover:text-green-400 transition-colors duration-300">
            <FaWhatsapp />
          </a>
        </div>
        <p className="text-sm mb-4">
          © 2024 Digital Whiz. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
