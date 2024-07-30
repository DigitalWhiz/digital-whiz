'use client';

import React from 'react';
import Slider from '../ui/sliders/Slider';

const SectionDos: React.FC = () => {
  return (
    <section
      id="servicios" 
      className="py-16 md:py-32 relative flex flex-col items-center bg-secondary text-white" style={{ minHeight: '800px' }}>
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl sm:text-6xl font-extrabold mb-4 text-center" data-aos="fade-right"
          style={{ textShadow: "8px 5px 5px rgba(0,0,0,0.8)" }}>
          NUESTROS SERVICIOS
        </h2>
        <Slider />
      </div>
    </section>
  );
};

export default SectionDos;
