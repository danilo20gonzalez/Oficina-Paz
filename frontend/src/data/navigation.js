// src/data/navigation.js
export const navigationLinks = [
  { id: 1, title: 'Inicio', path: '/', current: true },
  {
    id: 2,
    title: 'Quienes somos',
    path: '/quienes-somos',
    current: false,
    options: [
      { id: 1, title: 'Origen', path: '/quienes-somos/origen' },
      { id: 2, title: 'Logros', path: '/quienes-somos/logros' },
      { id: 3, title: 'Contactanos', path: '/quienes-somos/contacto' },
      { id: 4, title: 'Instancias Participantes', path: '/quienes-somos/instancias-participantes' },
    ],
  },
  {
    id: 3,
    title: 'Noticias',
    path: '/noticias',
    current: false,
    options: [
      { id: 1, title: 'Noticias recientes', path: '/noticias/recientes' },
      { id: 2, title: 'Noticias archivadas', path: '/noticias/archivadas' },
    ],
  },
  {
    id: 4,
    title: 'Proyectos',
    path: '/proyectos',
    current: false,
    options: [
      { id: 1, title: 'Proyectos en curso', path: '/proyectos/en-curso' },
      { id: 2, title: 'Proyectos finalizados', path: '/proyectos/finalizados' },
    ],
  },
  { id: 5, 
    title: 'Acciones por la Paz', 
    path: '/acciones-por-la-paz', 
    current: false, 
    options: [
      { id: 1, title: 'Iniciativas', path: '/acciones-por-la-paz/iniciativas' },
      { id: 2, title: 'Eventos', path: '/acciones-por-la-paz/eventos' },
      { id: 3, title: 'Comisión de la Verdad', path: '/acciones-por-la-paz/comision-de-la-verdad' },
      { id: 4, title: 'Repositorio', path: '/acciones-por-la-paz/repositorio' },
    ],
  },

  { id: 6, title: 'Beneficiarios', path: '/beneficiarios', current: false },
  { id: 7, title: 'Acreditación', path: '/acreditacion', current: false },
];

export const socialLinks = [
  { id: 1, name: 'Facebook', icon: 'fab fa-facebook', url: '#' },
  { id: 2, name: 'Twitter', icon: 'fab fa-twitter', url: '#' },
  { id: 3, name: 'Instagram', icon: 'fab fa-instagram', url: '#' },
];