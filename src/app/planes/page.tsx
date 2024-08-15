"use client";

import React from "react";
import { Title } from "../../components/ui/typography/TitleLogo";
import { plans } from "../../../assets/data/infodata";
import { Card } from "../../components/ui/card/Card";
import Image from "next/image";

// Definir la interfaz para un plan
interface Plan {
  id: number;
  title: string;
  price: string;
  cover: string;
}

const Planes: React.FC = () => {
  return (
    <section className="py-16" id="planes">
      <div className="container mx-auto max-w-screen-xl px-4 lg:px-8">
        <div className="text-center mb-12 mt-20">
          <Title title="NUESTROS PLANES" className="text-shadow-lg" />

          {/* Sección de las dos imágenes arriba de los planes */}
          <div className="flex flex-col sm:flex-row justify-center mb-8">
            <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
              <Image
                src="/img/ServiciosPlan1.png"
                alt="Servicios planes"
                width={500}
                height={300}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
            <div className="w-full sm:w-1/2 px-2">
              <Image
                src="/img/ServiciosPlan2.png"
                alt="Servicios Planes"
                width={500}
                height={300}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>

        </div>

        {/* Sección para los planes */}
        <div className="flex flex-wrap justify-center max-w-screen-xl mx-auto p-12">
          {plans.map((plan: Plan, index: number) => (
            <div
              key={plan.id}
              className={`w-full flex flex-col sm:flex-row items-center mb-8 ${
                index % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}>
              <div className="w-full sm:w-1/2 px-4 flex-grow">
                <Card
                  data={{
                    id: plan.id.toString(),
                    cover: plan.cover,
                    title: "",
                  }}
                  caption=""
                  show={false}
                  path="#"
                  className="h-96 sm:h-80 lg:h-96 w-full object-cover"
                />
              </div>

              {/* Espacio para el título y el precio al costado de la imagen */}
              <div className="w-full sm:w-1/2 px-4 text-center sm:text-left">
                <div className="titleSm mb-2">
                  <Title title={plan.title} className="text-shadow-lg mb-2" />
                  {/* Aquí ajustas el tamaño del texto del precio según la pantalla */}
                  <Title 
                    title={plan.price} 
                    className="text-2xl sm:text-2xl lg:text-2xl text-shadow-lg mb-2" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de las dos imágenes abajo de los planes */}
        <div className="flex flex-col sm:flex-row justify-center my-8">
          <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
            <Image
              src="/img/PreciosPlan1.png"
              alt="Imagen 3"
              width={500}
              height={300}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
          <div className="w-full sm:w-1/2 px-2">
            <Image
              src="/img/PreciosPlan2.png"
              alt="Imagen 4"
              width={500}
              height={300}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Planes;
