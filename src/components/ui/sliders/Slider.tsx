'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

interface Slide {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

const desktopSlides: Slide[] = [
  { id: 1, imageUrl: '/img/3.png', title: 'Redes Sociales', description: 'Estrategias creativas que generan impacto' },
  { id: 2, imageUrl: '/img/4.png', title: 'Sitios Web', description: 'Diseño y funcionalidad al servicio de tu marca' },
  { id: 3, imageUrl: '/img/2.png', title: 'Campañas Publicitarias (ADS)', description: 'Maximiza tu alcance con campañas efectivas' },
  { id: 4, imageUrl: '/img/5.png', title: 'Identidad de Marca', description: 'Construimos una imagen coherente y atractiva' },
  { id: 6, imageUrl: '/img/6.png', title: 'E-commerce', description: 'Optimiza tu tienda online para más ventas' },
];

const mobileSlides: Slide[] = [
  { id: 1, imageUrl: '/img/SliderMobile1.png', title: 'Redes Sociales', description: 'Estrategias creativas que generan impacto' },
  { id: 2, imageUrl: '/img/SliderMobile2.png', title: 'Sitios Web', description: 'Diseño y funcionalidad al servicio de tu marca' },
  { id: 3, imageUrl: '/img/SliderMobile3.png', title: 'Campañas Publicitarias (ADS)', description: 'Maximiza tu alcance con campañas efectivas' },
  { id: 4, imageUrl: '/img/SliderMobile4.png', title: 'Identidad de Marca', description: 'Construimos una imagen coherente y atractiva' },
  { id: 6, imageUrl: '/img/SliderMobile6.png', title: 'E-commerce', description: 'Optimiza tu tienda online para más ventas' },
];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState<Slide[]>(desktopSlides);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlides(mobileSlides);
      } else {
        setSlides(desktopSlides);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
      <div className="flex justify-center items-center relative">
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-75 text-white p-2 rounded-full z-10"
        >
          <FaAngleLeft size={24} />
        </button>
        <div
          className="flex transition-transform duration-500 w-full h-[500px]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full h-full relative flex-shrink-0"
            >
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                fill
                className="rounded-lg"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <div className="absolute inset-x-0 top-1/4 flex flex-col justify-center items-start p-10 pl-24 bg-black bg-opacity-60 text-white rounded-lg">
                <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
                <p className="text-lg">{slide.description}</p>
                <a href="https://wa.me/message/XWKCRXJ2NSCII1" target="_blank" rel="noopener noreferrer" className="mt-4 px-4 py-2 bg-blue-500 rounded">Consultar</a>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-75 text-white p-2 rounded-full z-10"
        >
          <FaAngleRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
