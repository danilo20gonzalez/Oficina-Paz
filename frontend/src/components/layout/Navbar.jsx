import React, { useState, useEffect } from 'react';
import { navigationLinks, socialLinks } from '../../data/navigation';
import { Search, Plus, Minus, ChevronDown, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext'; 

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme(); 
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [fontSize, setFontSize] = useState(16);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Aplicar tamaño de fuente
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  const handleDropdown = (id) => {
    setActiveDropdown(id);
  };

  const adjustFontSize = (increment) => {
    setFontSize(prev => {
      const newSize = prev + increment;
      return Math.max(12, Math.min(24, newSize));
    });
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      console.log('Búsqueda:', searchQuery);
      // Implementar lógica de búsqueda
    }
  };

  // Colores basados en el tema global
  const themeClasses = isDarkMode ? "bg-gray-800 text-white" : "bg-gradient-to-r from-green-800 via-emerald-700 to-green-900 text-white";
  const toolbarClasses = isDarkMode ? "bg-gray-700 border-gray-600" : "bg-green-900 border-green-700";

  const scrollEffect = isScrolled ? "shadow-2xl" : "shadow-lg";

  return (
    <nav className={`${themeClasses} ${scrollEffect} fixed w-full top-0 z-50 transition-all duration-500`}>
      {/* Barra superior - Logo, herramientas de accesibilidad y búsqueda */}
      <div className={`${toolbarClasses} border-b px-4 py-2`}>
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer">
            <div className="text-3xl mr-3 transform group-hover:scale-110 transition-transform duration-300">
              🕊️
            </div>
            <div>
              <h1 className="text-xl font-bold text-green-50">
                Oficina de Paz
              </h1>
              <p className="text-xs text-green-200 font-light">
                Territorio de Armonía y Reconciliación
              </p>
            </div>
          </div>

          {/* Herramientas de accesibilidad y búsqueda - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Barra de búsqueda */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center bg-white/10 rounded-full px-3 py-1 backdrop-blur-sm">
                  <Search size={16} className="text-green-200 mr-2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleSearch}
                    placeholder="Buscar..."
                    className="bg-transparent text-white placeholder-green-200 focus:outline-none w-48"
                    autoFocus
                    aria-label="Campo de búsqueda"
                  />
                  <button 
                    onClick={() => setIsSearchOpen(false)}
                    className="ml-2 p-1 hover:bg-white/10 rounded-full transition-colors duration-200"
                    aria-label="Cerrar búsqueda"
                  >
                    <X size={14} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Abrir búsqueda"
                  title="Buscar"
                >
                  <Search size={18} />
                </button>
              )}
            </div>

            {/* Separador */}
            <div className="h-6 w-px bg-green-600"></div>

            {/* Controles de tamaño de fuente */}
            <div className="flex items-center space-x-2 bg-white/10 rounded-full px-3 py-1">
              <button
                onClick={() => adjustFontSize(-2)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
                aria-label="Reducir tamaño de fuente"
                title="Reducir texto"
              >
                <Minus size={14} />
              </button>
              <span className="text-sm px-2 text-green-100" aria-label={`Tamaño de fuente: ${fontSize}px`}>
                ᴀ / Ａ
              </span>
              <button
                onClick={() => adjustFontSize(2)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
                aria-label="Aumentar tamaño de fuente"
                title="Aumentar texto"
              >
                <Plus size={14} />
              </button>
            </div>

            {/* Toggle tema GLOBAL */}
            <button
              onClick={toggleTheme} // ← Usa la función global
              className="p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
              aria-label={isDarkMode ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
              title={isDarkMode ? "Modo claro" : "Modo oscuro"}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Botón menú móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Barra de navegación principal - Desktop */}
      <div className={`hidden md:block px-4 py-0.5 ${isDarkMode ? 'bg-gray-800' : 'bg-green-800'}`}>
        <div className="container mx-auto">
          <div className="flex justify-center space-x-8">
            {navigationLinks.map((link) => (
              <div key={link.id} className="relative group">
                <button
                  onClick={() => handleDropdown(link.id)}
                  onMouseEnter={() => link.options && setActiveDropdown(link.id)}
                  className="flex items-center px-4 py-2 text-green-50 hover:text-white font-medium transition-all duration-300 hover:bg-white/10 rounded-lg group"
                  aria-expanded={activeDropdown === link.id}
                  role="menuitem"
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
                    className="absolute top-full left-0 mt-1 bg-white border border-green-100 rounded-lg shadow-2xl py-2 min-w-64 z-50 submenu-dark"
                    onMouseLeave={() => handleDropdown(null)}
                  >
                    {link.options.map((item) => (
                      <a
                        key={item.id}
                        href={item.path}
                        className={`block px-4 py-1 transition-colors duration-200 border-b last:border-b-0 ${
                          isDarkMode
                            ? 'text-gray-700 hover:bg-gray-700 hover:text-white border-gray-700'
                            : 'text-gray-700 hover:bg-green-300 hover:text-green-800 border-gray-100'
                        }`}
                        role="menuitem" 
                      >
                        <span className="font-medium">{item.title}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className={`md:hidden border-t ${isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-green-800 border-green-700'}`}>
          <div className="px-4 py-4">
            {/* Búsqueda móvil */}
            <div className="mb-4">
              <div className="flex items-center bg-white/10 rounded-lg px-3 py-2">
                <Search size={16} className="text-green-200 mr-2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleSearch}
                  placeholder="Buscar..."
                  className="bg-transparent text-white placeholder-green-200 focus:outline-none flex-1"
                  aria-label="Búsqueda móvil"
                />
              </div>
            </div>

            {/* Enlaces móviles */}
            <div className="space-y-2">
              {navigationLinks.map((link) => (
                <div key={link.id}>
                  <button
                    onClick={() => handleDropdown(link.id)}
                    className="w-full flex justify-between items-center px-4 py-3 text-left text-green-50 hover:bg-white/10 rounded-lg transition-colors duration-200"
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
                  
                  {/* Submenu móvil */}
                  {link.options && activeDropdown === link.id && (
                    <div className="ml-4 mt-2 space-y-1 animate-in slide-in-from-top duration-200">
                      {link.options.map((item) => (
                        <a
                          key={item.id}
                          href={item.path}
                          className="block px-4 py-2 text-green-100 hover:bg-white/10 rounded-lg transition-colors duration-200"
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
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-green-700">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => adjustFontSize(-2)}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label="Reducir fuente"
                >
                  <Minus size={16} />
                </button>
                <span className="text-sm text-green-100"></span>
                <button
                  onClick={() => adjustFontSize(2)}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label="Aumentar fuente"
                >
                  <Plus size={16} />
                </button>
              </div>

              {/* Toggle tema GLOBAL en móvil */}
              <button
                onClick={toggleTheme}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Cambiar tema"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <div className="flex space-x-1">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
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