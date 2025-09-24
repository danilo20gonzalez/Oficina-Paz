import React, { useState, useEffect } from 'react';
import { navigationLinks, socialLinks } from '../../data/navigation';
import { Search, Plus, Minus, ChevronDown, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import logoUA from '../../assets/logoUAmini2.png';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [fontSize, setFontSize] = useState(16);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  const handleDropdown = (id) => setActiveDropdown(id);

  const adjustFontSize = (increment) => {
    setFontSize(prev => {
      const newSize = prev + increment;
      return Math.max(12, Math.min(24, newSize));
    });
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') console.log('Búsqueda:', searchQuery);
  };

  // 🎨 Colores según tema
  const themeClasses = isDarkMode
    ? "bg-gray-800 text-white"
    : "bg-white text-black"; // fondo blanco, letras negras

  const toolbarClasses = isDarkMode
    ? "bg-gray-700 border-gray-600"
    : "bg-gray-100 border-gray-300"; // barra superior clara

  const scrollEffect = isScrolled ? "shadow-2xl" : "shadow-lg";

  return (
    <nav className={`${themeClasses} ${scrollEffect} fixed w-full top-0 z-50 transition-all duration-500`}>
      {/* Barra superior móvil */}
      <div className={`${toolbarClasses} border-b px-4 py-2 md:hidden`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center group cursor-pointer">
            <div>
              <h1 className="text-xl font-bold">
                Oficina de Paz
              </h1>
              <p className="text-xs text-gray-600 font-light">
                Territorio de Armonía y Reconciliación
              </p>
            </div>
          </div>

          {/* Botón menú móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className={`hidden md:block px-4 py-1.5 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto">
          <div className="flex justify-between w-full items-center">
            <img
              src={logoUA}
              alt="Logo"
              className="w-12 h-auto object-contain"
            />

            <div className="flex justify-center space-x-8 flex-1">
              {navigationLinks.map((link) => (
                <div key={link.id} className="relative group">
                  <button
                    onClick={() => handleDropdown(link.id)}
                    onMouseEnter={() => link.options && setActiveDropdown(link.id)}
                    className={`flex items-center px-2 py-2 text-lg transition-all duration-300 hover:bg-gray-200 rounded-lg group ${
                      isDarkMode ? 'text-white hover:text-gray-100' : 'text-black hover:text-gray-800'
                    }`}
                    aria-expanded={activeDropdown === link.id}
                  >
                    {link.title}
                    {link.options && (
                      <ChevronDown
                        size={16}
                        className={`ml-1 transition-transform duration-300 ${
                          activeDropdown === link.id ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>
                  {link.options && activeDropdown === link.id && (
                    <div
                      className={`absolute top-full left-0 mt-1 rounded-lg shadow-2xl py-2 min-w-64 z-50 border ${
                        isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                      }`}
                      onMouseLeave={() => handleDropdown(null)}
                    >
                      {link.options.map((item) => (
                        <a
                          key={item.id}
                          href={item.path}
                          className={`block px-4 py-1 transition-colors duration-200 border-b last:border-b-0 ${
                            isDarkMode
                              ? 'text-gray-100 hover:bg-gray-600 hover:text-white border-gray-600'
                              : 'text-gray-800 hover:bg-gray-100 hover:text-black border-gray-200'
                          }`}
                        >
                          <span className="font-medium">{item.title}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Botón tema */}
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-200 rounded-full transition-all duration-300 hover:scale-110"
              aria-label={isDarkMode ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className={`md:hidden border-t ${isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'}`}>
          <div className="px-4 py-4">
            <div className="mb-4">
              <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
                <Search size={16} className="text-gray-500 mr-2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleSearch}
                  placeholder="Buscar..."
                  className="bg-transparent text-black placeholder-gray-400 focus:outline-none flex-1"
                />
              </div>
            </div>

            {/* Enlaces móviles */}
            <div className="space-y-2">
              {navigationLinks.map((link) => (
                <div key={link.id}>
                  <button
                    onClick={() => handleDropdown(link.id)}
                    className={`w-full flex justify-between items-center px-4 py-3 text-left rounded-lg transition-colors duration-200 ${
                      isDarkMode
                        ? 'text-white hover:bg-gray-700'
                        : 'text-black hover:bg-gray-100'
                    }`}
                  >
                    {link.title}
                    {link.options && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          activeDropdown === link.id ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>

                  {link.options && activeDropdown === link.id && (
                    <div className="ml-4 mt-2 space-y-1">
                      {link.options.map((item) => (
                        <a
                          key={item.id}
                          href={item.path}
                          className={`block px-4 py-2 rounded-lg transition-colors duration-200 ${
                            isDarkMode
                              ? 'text-gray-100 hover:bg-gray-700'
                              : 'text-gray-800 hover:bg-gray-100'
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Controles móviles */}
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-300">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => adjustFontSize(-2)}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  aria-label="Reducir fuente"
                >
                  <Minus size={16} />
                </button>
                <button
                  onClick={() => adjustFontSize(2)}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  aria-label="Aumentar fuente"
                >
                  <Plus size={16} />
                </button>
              </div>

              <button
                onClick={toggleTheme}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                aria-label="Cambiar tema"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <div className="flex space-x-1">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    aria-label={link.name}
                  >
                    <i className={`${link.icon} text-sm`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;