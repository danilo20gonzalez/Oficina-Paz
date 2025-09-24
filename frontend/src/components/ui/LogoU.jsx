import React from 'react';
import logoIni from '../../assets/LogoUni.png';
import logoIniWhite from '../../assets/LogoUniWhite.png';
import { useTheme } from '../../contexts/ThemeContext';

const HeaderWithImage = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="relative z-20 flex justify-center">
      <div className={`rounded-bl-lg rounded-br-lg shadow-lg max-w-4xl w-full mx-4 transition-all duration-500 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
        <img 
          src={isDarkMode ? logoIniWhite : logoIni}
          alt="Universidad de la Amazonia - Oficina de Paz" 
          className="w-full h-auto object-contain rounded-lg transition-all duration-500 ease-in-out"
        />
      </div>
    </div>
  );
};

export default HeaderWithImage;