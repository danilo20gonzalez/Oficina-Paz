import React, { useState, useEffect } from 'react';
import { carouselItems } from '../../data/carouselData';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Cambiar slide automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === carouselItems.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? carouselItems.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === carouselItems.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="flex justify-center">
      <section className="relative h-64 md:h-80 w-full max-w-6xl overflow-hidden rounded-lg shadow-lg mt-[40px]">
        {/* Slides */}
        <div className="relative h-full">
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Imagen de fondo */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
              
              {/* Contenido del slide */}
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-3xl">
                  <h2 className="text-2xl md:text-4xl font-bold mb-3 animate-fade-in">
                    {item.title}
                  </h2>
                  <p className="text-lg md:text-xl mb-6 animate-fade-in-delay">
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 animate-fade-in-delay-2"
                  >
                    {item.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controles de navegación */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
          aria-label="Slide anterior"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        
        <button
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
          aria-label="Slide siguiente"
        >
          <i className="fas fa-chevron-right"></i>
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-gray-400'
              }`}
              aria-label={`Ir al slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Carousel;