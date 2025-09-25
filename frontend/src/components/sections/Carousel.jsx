import React, { useState, useEffect } from 'react';
import { carouselItems } from '../../data/carouselData';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('next');

  // Cambiar slide automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('next');
      setCurrentSlide((prevSlide) => 
        prevSlide === carouselItems.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    // Determinar la dirección basada en el índice
    setDirection(index > currentSlide ? 'next' : 'prev');
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setDirection('prev');
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? carouselItems.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setDirection('next');
    setCurrentSlide((prevSlide) => 
      prevSlide === carouselItems.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="flex justify-center">
      <section className="relative h-64 md:h-75 w-full max-w-6xl overflow-hidden rounded-lg shadow-lg mt-[80px] bg-gray-950/75">
        {/* Slides */}
        <div className="relative h-full flex transition-transform duration-700 ease-in-out">
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
                index === currentSlide ? 'translate-x-0' : 
                direction === 'next' ? '-translate-x-full' : 'translate-x-full'
              }`}
            >
              {/* Imagen de fondo */}
              <img
                src={item.image}
                alt="slide"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="relative h-full flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-3xl">
                  <h2 className="text-2xl md:text-4xl font-bold mb-3 animate-fade-in">
                    {item.title}
                  </h2>
                  <p className="text-lg md:text-xl mb-6 animate-fade-in-delay">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controles de navegación */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-950/75 backdrop-filter backdrop-blur-md text-white p-2 rounded-full hover:bg-gray-950/90 transition"
          aria-label="Slide anterior"
        >
          <MdNavigateBefore className="w-4 h-4" />
        </button>
        
        <button
          onClick={goToNextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-950/75 backdrop-filter backdrop-blur-md text-white p-2 rounded-full hover:bg-gray-950/90 transition"
          aria-label="Slide siguiente"
        >
          <MdNavigateNext className="w-4 h-4" />
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