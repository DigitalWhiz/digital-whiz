'use client';

import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const eventImages = [...Array(16)].map((_, index) => `/img/event${index + 1}.png`);

const Projects: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      mirror: true,
      disable: "phone",
    });
  }, []);

  useEffect(() => {
    function handleResize() {
      AOS.refresh();
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="py-24" data-aos="fade-up">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-8 text-center" data-aos="fade-up">
          Nos Destacamos
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {eventImages.map((image, index) => (
            <Link key={index} href={`/eventos/${index + 1}`} passHref>
              <Card
                isFooterBlurred
                radius="lg"
                className="border-none relative overflow-hidden rounded-lg transform transition duration-500 hover:scale-105 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={`${index * 50}`}
                style={{ position: 'relative' }}
              >
                <Image
                  alt={`evento ${index + 1}`}
                  src={image}
                  width={300}
                  height={200}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
                <CardFooter
                  className="flex flex-col justify-center items-center bg-white/50 border-white/20 border-1 py-2 px-4 absolute inset-0 z-10 opacity-0 transition-opacity duration-300 hover:opacity-100"
                >
                  <p className="text-base text-red-600 font-extrabold mb-2">Próximamente</p>
                  <Button
                    className="text-base text-white bg-black/60"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    Entérate más
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
