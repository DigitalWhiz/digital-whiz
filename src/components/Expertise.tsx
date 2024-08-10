'use client';

import React from "react";
import { Title } from "./ui/typography/TitleLogo";
import { expertise } from "../../assets/data/infodata";
import { Card } from "./ui/card/Card";

const Expertise: React.FC = () => {
  return (
    <section className="py-16" id="servicios">
      <div className="container mx-auto max-w-screen-xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <Title title="NUESTROS SERVICIOS" className="text-shadow-lg"/>
          <p className="text-gray-300 text-lg font-bold mx-auto max-w-3xl">
            Contamos con una trayectoria sólida en el mundo del marketing
            digital, respaldada por una variedad de proyectos exitosos que
            abarcan distintos sectores e industrias. Estamos comprometidos en
            ofrecer soluciones personalizadas y efectivas que impulsen el
            crecimiento y éxito de cada marca con la que trabajamos.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {expertise.map((item) => (
            <Card
              data={{ ...item, id: item.id.toString() }}
              key={item.id}
              caption="Quiero saber más"
              show={true}
              path="/planes"
              className="text-center h-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
