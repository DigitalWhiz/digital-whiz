'use client';

import Link from "next/link";
import { cn } from "@/libs/utils";
import { FC, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { Avatar } from "@nextui-org/react";
import { AUTH_ROUTES } from "@/routes/routes";

interface MenuMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuMobile: FC<MenuMobileProps> = ({ isOpen, onClose }) => {
  const { data: session } = useSession();
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  return (
    <>
      <div
        className={cn(
          "fixed left-0 top-0 w-[75%] sm:w-[50%] h-screen z-50 bg-black flex items-center justify-center transition-all duration-300 ease-in-out",
          !isOpen ? "-left-full" : "left-0"
        )}
      >
        <div className="p-4 w-full">
          <button onClick={onClose} className="mb-4">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <ul className="flex flex-col items-center gap-2">
            <li>
              <Link
                href="/"
                className="block w-full py-3 px-4 text-gray-400 border-b border-primary text-center transition-colors duration-300"
                onClick={onClose}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/#servicios"
                className="block w-full py-3 px-4 text-gray-400 border-b border-transparent hover:border-accent text-center transition-colors duration-300"
                onClick={onClose}
              >
                Nuestros Servicios
              </Link>
            </li>
            <li>
              <Link
                href="/planes"
                className="block w-full py-3 px-4 text-gray-400 border-b border-transparent hover:border-accent text-center transition-colors duration-300"
                onClick={onClose}
              >
                Planes
              </Link>
            </li>
            <li>
              <Link
                href="/#contactanos"
                className="block w-full py-3 px-4 text-gray-400 border-b border-transparent hover:border-accent text-center transition-colors duration-300"
                onClick={onClose}
              >
                Contactanos
              </Link>
            </li>
            <li>
              <Link
                href="/#sobreNosotros"
                className="block w-full py-3 px-4 text-gray-400 border-b border-transparent hover:border-accent text-center transition-colors duration-300"
                onClick={onClose}
              >
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/preguntas"
                className="block w-full py-3 px-4 text-gray-400 border-b border-transparent hover:border-accent text-center transition-colors duration-300"
                onClick={onClose}
              >
                Preguntas Frecuentes
              </Link>
            </li>
            
            {/* {session?.user ? (
              <div className="relative flex flex-col items-center mt-4">
                <button onClick={toggleUserMenu} className="flex items-center gap-2">
                  {session.user.image ? (
                    <Avatar
                      src={session.user.image}
                      alt="Imagen de perfil"
                      size="sm"
                      color="danger"
                      isBordered
                    />
                  ) : (
                    <Avatar
                      name={session.user.name ?? "Usuario"}
                      alt="Imagen de perfil"
                      size="sm"
                      color="danger"
                      isBordered
                    />
                  )}
                </button>
                {userMenuOpen && (
                  <ul className="absolute mt-2 -top-2 transform -translate-y-full w-48 bg-slate-950 bg-opacity-90 border border-gray-500 rounded-lg shadow-lg z-50">
                    <li className="px-4 py-2 hover:bg-gray-700 rounded-lg">
                      <Link href="/" className="text-white" onClick={onClose}>Inicio</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700 rounded-lg">
                      <Link href="/dashboard" className="text-white" onClick={onClose}>Panel de control</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700 rounded-lg">
                      <Link href="/dashboard/profile" className="text-white" onClick={onClose}>Perfil</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700 rounded-lg">
                      <Link href="/tickets" className="text-white" onClick={onClose}>Tickets</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700 rounded-lg">
                      <button
                        onClick={async () => {
                          await signOut({ callbackUrl: AUTH_ROUTES.HOME });
                          onClose();
                        }}
                        className="w-full text-left text-red-500"
                      >
                        Cerrar Sesión
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <>
                <li>
                  <Link
                    href="/login"
                    className="block w-full py-3 px-6 text-white bg-gradient-to-r from-[#F64994] to-[#FC78F4] rounded text-center shadow-md transition-all mt-4"
                    onClick={onClose}
                  >
                    Iniciar Sesión
                  </Link>
                </li>
                <li>
                  <Link
                    href="/register"
                    className="block w-full py-3 px-6 text-white bg-gradient-to-r from-[#F64994] to-[#FC78F4] rounded text-center shadow-md transition-all mt-4"
                    onClick={onClose}
                  >
                    Registrarse
                  </Link>
                </li>
              </>
            )} */}
          </ul>
        </div>
      </div>
      <div
        onClick={onClose}
        className={cn(
          "fixed left-0 top-0 w-full h-full z-40 bg-black/30",
          !isOpen ? "hidden" : "block"
        )}
      />
    </>
  );
};

export default MenuMobile;
