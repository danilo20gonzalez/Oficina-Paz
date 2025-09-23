import React from 'react';
import Layout from '../components/layout/Layout'; 
import HeroCarousel from '../components/sections/Carousel';
import NewsGrid from '../components/sections/NewsGrid';
import FloatingIcons from '../components/common/FloatingIcons';
import { useTheme } from '../contexts/ThemeContext';

const Home = () => {
  const { isDarkMode } = useTheme();

  return (
    <Layout>
      <HeroCarousel />
      <NewsGrid />
      
      {/* Resto del contenido... */}
      <div className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className={isDarkMode ? "text-3xl md:text-4xl font-bold text-gray-100 mb-6" : "text-3xl md:text-4xl font-bold text-gray-800 mb-6"}>
            Bienvenido a la Oficina de Paz
          </h2>
          <p className={isDarkMode ? "text-xl text-gray-300 max-w-3xl mx-auto" : "text-xl text-gray-600 max-w-3xl mx-auto"}>
            Trabajamos por la construcción de una cultura de paz, diálogo y reconciliación 
            en nuestra comunidad.
          </p>
        </section>
      </div>

      {/* Iconos Flotantes */}
      <FloatingIcons /> 
    </Layout>
  );
};

export default Home;