
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="h-[90vh] flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
        Transformamos ideas en <span className="text-[#0ff]">experiencias digitales</span>
      </h2>
      <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
        Creamos soluciones innovadoras de tecnología y diseño para impulsar tu marca en el mundo digital.
      </p>
    </section>
  );
};

export default Hero;
