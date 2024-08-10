import { home } from "../../../assets/data/infodata";
import Banner from "../Banner";
import Expertise from "../Expertise";
// import ShowCase from "../ShowCase";
import Testimonial from "../../components/Testimonial";
import { Title, TitleLogo } from "../ui/typography/TitleLogo";
// import { BlogCard, Brand } from "../../components/router";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="relative text-center overflow-hidden h-[90vh] bg-cover bg-center bg-no-repeat bg-[url('/img/sectionCincoMobile.png')]">
        <div className="container mx-auto pt-12 pb-6">
          <TitleLogo title="Creativo" caption="Equipo " className="" />
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl leading-tight sm:leading-[80px] md:leading-[115px] font-semibold mb-6">
            CONSTRUIMOS EXPERIENCIAS DIGITALES
          </h1>

          <div className="flex justify-center mb-6 flex-wrap">
            <Title
              title="REDES SOCIALES"
              className="mx-4 mb-2 text-shadow-lg"
            />
            <span className="text-2xl leading-none text-green-500"> </span>
            <Title title="SITIOS WEB" className="mx-4 mb-2 text-shadow-lg" />
            <span className="text-2xl leading-none text-green-500"> </span>
            <Title
              title="CAMPAÑAS PUBLICITARIAS (ADS)"
              className="mx-4 mb-2 text-shadow-lg"
            />
            <span className="text-2xl leading-none text-green-500"> </span>
            <Title title="BRANDING" className="mx-4 mb-2 text-shadow-lg" />
            <span className="text-2xl leading-none text-green-500"> </span>
            <Title title="E-COMMERCE" className="mx-4 mb-2 text-shadow-lg" />
          </div>
        </div>
      </section>
      <section className="relative pt-16 pb-32">
        <div className="absolute inset-0 bg-dark blur-2xl z-[-1] -top-10 h-[200px]" />
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <Title
              title="La única agencia digital que necesitarás"
              className="text-shadow-lg"
            />
            <p className="text-gray-300 text-lg font-bold mx-auto max-w-4xl">
              Llevamos tu marca al siguiente nivel con estrategias innovadoras y
              resultados medibles. Nuestro enfoque personalizado asegura que
              cada servicio esté alineado con tus objetivos, impulsando tu
              presencia digital y maximizando tu impacto. Con Digital Whiz, no
              sólo te adaptas al cambio, lo lideras. Prepárate para transformar
              tu visión en éxito tangible.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-4">
            {home.map((item, i) => (
              <div
                className="flex flex-col items-center text-center text-white"
                key={i}>
                <span className="text-accent text-4xl mb-6">{item.icon}</span>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      {/* <ShowCase /> */}
      {/* <Brand /> ESTAMOS ORGULLOSOS DE TRABAJAR CON ESTAS EMPRESAS */}

      {/* <div className="text-center mt-12">
        <Title title="Latest news & articles" />
      </div>
      <BlogCard /> */}
    </>
  );
};

export default Hero;
