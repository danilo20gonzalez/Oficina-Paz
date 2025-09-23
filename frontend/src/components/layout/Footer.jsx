import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  // Datos del footer
  const footerData = {
    contact: {
      address: 'Calle de la Paz #123, Centro Histórico',
      city: 'Ciudad, CP 00000',
      phone: '(123) 456-7890',
      email: 'info@oficinadepaz.org',
      schedule: 'Lunes a Viernes: 8:00 AM - 5:00 PM'
    },
    quickLinks: [
      { name: 'Inicio', path: '/' },
      { name: 'Noticias', path: '/noticias' },
      { name: 'Proyectos', path: '/proyectos' },
      { name: 'Nosotros', path: '/nosotros' },
      { name: 'Contacto', path: '/contacto' },
      { name: 'Voluntariado', path: '/voluntariado' }
    ],
    programs: [
      { name: 'Mediación Comunitaria', path: '/programas/mediacion' },
      { name: 'Educación para la Paz', path: '/programas/educacion' },
      { name: 'Cultura de Paz', path: '/programas/cultura-paz' },
      { name: 'Resolución de Conflictos', path: '/programas/resolucion-conflictos' }
    ],
    socialLinks: [
      { name: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnULcBfSqH9C3ooVVkPDA9rxRyqHoR3M1ng&s' },
      { name: 'WhatsApp', icon: 'fab fa-whatsapp', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnULcBfSqH9C3ooVVkPDA9rxRyqHoR3M1ng&s' },
      { name: 'YouTube', icon: 'fab fa-youtube', url: '#' },
      { name: 'Instagram', icon: 'fab fa-instagram', url: '#' },
      { name: 'Twitter', icon: 'fab fa-twitter', url: '#' }
    ]
  };

  return (
    <footer className={isDarkMode ? "bg-gray-900 text-gray-200" : "bg-gradient-to-b from-green-900 to-emerald-950 text-white"}>
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo y Descripción */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-3">🕊️</div>
              <h3 className={isDarkMode ? "text-2xl font-bold text-gray-100" : "text-2xl font-bold text-white"}>Oficina de Paz</h3>
            </div>
            <p className={isDarkMode ? "text-gray-300 mb-6 leading-relaxed" : "text-green-100 mb-6 leading-relaxed"}>
              Trabajando por la construcción de una cultura de paz, diálogo y reconciliación 
              en nuestra comunidad mediante programas educativos y de mediación.
            </p>
            <div className="flex space-x-4">
              {footerData.socialLinks && footerData.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className={isDarkMode ? "bg-gray-700 hover:bg-gray-600 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110" : "bg-green-800 hover:bg-green-700 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`${social.icon} ${isDarkMode ? "text-gray-100" : "text-white"}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className={isDarkMode ? "text-lg font-semibold mb-6 text-gray-100 border-b-2 border-gray-700 pb-2" : "text-lg font-semibold mb-6 text-white border-b-2 border-green-700 pb-2"}>
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {footerData.quickLinks && footerData.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className={isDarkMode ? "text-gray-300 hover:text-gray-100 transition-colors duration-300 flex items-center group" : "text-green-100 hover:text-white transition-colors duration-300 flex items-center group"}
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 text-green-400 group-hover:translate-x-1 transition-transform duration-300"></i>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programas */}
          <div>
            <h4 className={isDarkMode ? "text-lg font-semibold mb-6 text-gray-100 border-b-2 border-gray-700 pb-2" : "text-lg font-semibold mb-6 text-white border-b-2 border-green-700 pb-2"}>
              Nuestros Programas
            </h4>
            <ul className="space-y-3">
              {footerData.programs && footerData.programs.map((program) => (
                <li key={program.name}>
                  <a
                    href={program.path}
                    className={isDarkMode ? "text-gray-300 hover:text-gray-100 transition-colors duration-300 flex items-center group" : "text-green-100 hover:text-white transition-colors duration-300 flex items-center group"}
                  >
                    <i className="fas fa-leaf text-xs mr-2 text-green-400"></i>
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className={isDarkMode ? "text-lg font-semibold mb-6 text-gray-100 border-b-2 border-gray-700 pb-2" : "text-lg font-semibold mb-6 text.  border-b-2 border-green-700 pb-2"}>
              Contacto
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className={isDarkMode ? "fas fa-map-marker-alt text-gray-400 mt-1 mr-3" : "fas fa-map-marker-alt text-green-400 mt-1 mr-3"}></i>
                <div>
                  <p className={isDarkMode ? "text-gray-300" : "text-green-100"}>{footerData.contact.address}</p>
                  <p className={isDarkMode ? "text-gray-300" : "text-green-100"}>{footerData.contact.city}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <i className={isDarkMode ? "fas fa-phone text-gray-400 mr-3" : "fas fa-phone text-green-400 mr-3"}></i>
                <a href={`tel:${footerData.contact.phone}`} className={isDarkMode ? "text-gray-300 hover:text-gray-100 transition-colors duration-300" : "text-green-100 hover:text-white transition-colors duration-300"}>
                  {footerData.contact.phone}
                </a>
              </div>
              
              <div className="flex items-center">
                <i className={isDarkMode ? "fas fa-envelope text-gray-400 mr-3" : "fas fa-envelope text-green-400 mr-3"}></i>
                <a href={`mailto:${footerData.contact.email}`} className={isDarkMode ? "text-gray-300 hover:text-gray-100 transition-colors duration-300" : "text-green-100 hover:text-white transition-colors duration-300"}>
                  {footerData.contact.email}
                </a>
              </div>
              
              <div className="flex items-center">
                <i className={isDarkMode ? "fas fa-clock text-gray-400 mr-3" : "fas fa-clock text-green-400 mr-3"}></i>
                <span className={isDarkMode ? "text-gray-300" : "text-green-100"}>{footerData.contact.schedule}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className={isDarkMode ? "border-t border-gray-700" : "border-t border-green-800"}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className={isDarkMode ? "text-gray-300 text-sm text-center md:text-left mb-4 md:mb-0" : "text-green-200 text-sm text-center md:text-left mb-4 md:mb-0"}>
              <p>&copy; {currentYear} Oficina de Paz. Todos los derechos reservados.</p>
            </div>
            
            <div className="flex flex-wrap justify-center space-x-6">
              <a href="/privacidad" className={isDarkMode ? "text-gray-300 hover:text-gray-100 text-sm transition-colors duration-300" : "text-green-200 hover:text-white text-sm transition-colors duration-300"}>
                Política de Privacidad
              </a>
              <a href="/terminos" className={isDarkMode ? "text-gray-300 hover:text-gray-100 text-sm transition-colors duration-300" : "text-green-200 hover:text-white text-sm transition-colors duration-300"}>
                Términos de Servicio
              </a>
              <a href="/mapa-sitio" className={isDarkMode ? "text-gray-300 hover:text-gray-100 text-sm transition-colors duration-300" : "text-green-200 hover:text-white text-sm transition-colors duration-300"}>
                Mapa del Sitio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;