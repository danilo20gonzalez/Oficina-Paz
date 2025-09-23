import React from 'react';
import { newsData } from '../../data/newsData';
import Card from '../ui/Card';
import { useTheme } from '../../contexts/ThemeContext';

const NewsGrid = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={isDarkMode ? "py-12 bg-gray-900" : "py-12 bg-gray-50"}>
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className={isDarkMode ? "text-3xl md:text-4xl font-bold text-gray-100 mb-4" : "text-3xl md:text-4xl font-bold text-gray-800 mb-4"}>
            Últimas Noticias
          </h2>
          <p className={isDarkMode ? "text-xl text-gray-300 max-w-2xl mx-auto" : "text-xl text-gray-600 max-w-2xl mx-auto"}>
            Mantente informado sobre nuestras actividades, proyectos y logros en la comunidad
          </p>
        </div>

        {/* Contenedor responsive */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl lg:max-w-5xl xl:max-w-7xl">
            {/* Grid de noticias */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 news-grid-container">
              {newsData.map((news) => (
                <div key={news.id} className="news-card-wrapper">
                  <Card
                    image={news.image}
                    title={news.title}
                    date={news.date}
                    excerpt={news.excerpt}
                    category={news.category}
                    link={news.link}
                    isDarkMode={isDarkMode}
                  />
                </div>
              ))}
            </div>

            {/* Botón Ver Todas */}
            <div className="text-center mt-12">
              <a 
                href="/noticias"
                className={isDarkMode ? "inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300" : "inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"}
              >
                Ver todas las noticias
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;