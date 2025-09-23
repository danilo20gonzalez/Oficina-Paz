import React, { useState } from 'react';

const Card = ({ 
  image, 
  title, 
  date, 
  excerpt, 
  category, 
  link,
  className = "",
  isDarkMode = false
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article className={`group ${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-xl shadow-lg overflow-hidden transition-all duration-400 hover:shadow-2xl hover:-translate-y-2 ${className}`}>
      {/* Contenedor de imagen con efecto de zoom suave */}
      <div className="relative h-48 overflow-hidden">
        <div className={`absolute inset-0 ${isDarkMode ? "bg-gray-700" : "bg-gray-100"} animate-pulse ${imageLoaded ? 'hidden' : 'block'}`}></div>
        <img 
          src={image} 
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
        {category && (
          <div className="absolute top-4 left-4">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full shadow-md ${isDarkMode ? "bg-blue-600 text-white" : "bg-gradient-to-r from-blue-600 to-purple-600 text-white"}`}>
              {category}
            </span>
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-6">
        {date && (
          <div className={`flex items-center text-sm ${isDarkMode ? "text-gray-300" : "text-gray-500"} mb-3`}>
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            {date}
          </div>
        )}
        
        <h3 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"} mb-3 group-hover:text-blue-600 transition-colors duration-300`}>
          {title}
        </h3>
        
        {excerpt && (
          <p className={` ${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-4 line-clamp-3`}>
            {excerpt}
          </p>
        )}
        
        {link && (
          <a 
            href={link}
            className={`inline-flex items-center ${isDarkMode ? "text-blue-400" : "text-blue-600"} font-semibold hover:text-blue-800 transition-all duration-300 group-hover:translate-x-1`}
          >
            Leer más
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        )}
      </div>
    </article>
  );
};

export default Card;