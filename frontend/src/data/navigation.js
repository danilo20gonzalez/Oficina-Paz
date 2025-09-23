// src/data/navigation.js
export const navigationLinks = [
  { id: 1, title: 'Inicio', path: '/', current: true },
  {
    id: 2,
    title: 'Noticias',
    path: '/noticias',
    current: false,
    options: [
      { id: 1, title: 'Noticias recientes', path: '/noticias/recientes' },
      { id: 2, title: 'Noticias archivadas', path: '/noticias/archivadas' },
    ],
  },
  {
    id: 3,
    title: 'Proyectos',
    path: '/proyectos',
    current: false,
    options: [
      { id: 1, title: 'Proyectos en curso', path: '/proyectos/en-curso' },
      { id: 2, title: 'Proyectos finalizados', path: '/proyectos/finalizados' },
    ],
  },
  { id: 4, title: 'Nosotros', path: '/nosotros', current: false },
  { id: 5, title: 'Contacto', path: '/contacto', current: false },
];

export const socialLinks = [
  { id: 1, name: 'Facebook', icon: 'fab fa-facebook', url: '#' },
  { id: 2, name: 'Twitter', icon: 'fab fa-twitter', url: '#' },
  { id: 3, name: 'Instagram', icon: 'fab fa-instagram', url: '#' },
];