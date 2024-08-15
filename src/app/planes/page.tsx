"use client";

import React from "react";
import { Title } from "../../components/ui/typography/TitleLogo";
import { plans } from "../../../assets/data/infodata";
import { Card } from "../../components/ui/card/Card";
import Image from "next/image";

interface Plan {
  id: number;
  title: string;
  price: string;
  cover: string;
}

const Planes: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20" id="planes">
      <div className="container mx-auto max-w-screen-xl px-6 lg:px-12">
        <div className="text-center mb-16 mt-24">
          <Title title="NUESTROS PLANES" className="text-shadow-lg" />

          {/* Sección de las dos imágenes arriba de los planes */}
          <div className="flex flex-col sm:flex-row justify-center mb-10 gap-4">
            <div className="w-full sm:w-1/2">
              <Image
                src="/img/ServiciosPlan1.png"
                alt="Servicios planes"
                width={500}
                height={600}  
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <Image
                src="/img/ServiciosPlan2.png"
                alt="Servicios Planes"
                width={500}
                height={600}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Sección para los planes */}
        <div className="flex flex-wrap justify-center max-w-screen-xl mx-auto gap-12">
          {plans.map((plan: Plan, index: number) => (
            <div
              key={plan.id}
              className={`w-full flex flex-col sm:flex-row items-center mb-16 ${
                index % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}>
              <div className="w-full sm:w-1/2 flex-grow mb-4 sm:mb-0">
                <Card
                  data={{
                    id: plan.id.toString(),
                    cover: plan.cover,
                    title: "",
                  }}
                  caption=""
                  show={false}
                  path="#"
                  className="h-[500px] sm:h-[600px] lg:h-[700px] w-full object-cover"  
                />
              </div>

              <div className="w-full sm:w-1/2 text-center sm:text-left">
                <div className="titleSm mb-4">
                  <Title title={plan.title} className="text-shadow-lg mb-4" />
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
        <div className="flex flex-col sm:flex-row justify-center gap-4 my-10">
          <div className="w-full sm:w-1/2">
            <Image
              src="/img/PreciosPlan1.png"
              alt="Imagen 3"
              width={500}
              height={600}  
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <Image
              src="/img/PreciosPlan2.png"
              alt="Imagen 4"
              width={500}
              height={600}  
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Planes;
