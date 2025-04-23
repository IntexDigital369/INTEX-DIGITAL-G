
import React from 'react';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <header className="p-4 border-b border-white/10 sticky top-0 bg-[#0a0a0a] z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">INTEX DIGITAL</h1>
          <nav className="space-x-4">
            <a href="#" className="hover:text-gray-400">Servicios</a>
            <a href="#" className="hover:text-gray-400">Nosotros</a>
            <a href="#" className="hover:text-gray-400">Contacto</a>
          </nav>
        </div>
      </header>
      <Hero />
    </div>
  );
};

export default Home;
