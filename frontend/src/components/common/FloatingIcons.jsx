// src/components/common/FloatingIcons.jsx
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, MessageCircle } from 'lucide-react';
import { BsTwitterX, BsWhatsapp, BsFacebook, BsYoutube, BsInstagram  } from "react-icons/bs";

const FloatingIcons = () => {
  const socialLinks = [
    {
      id: 1,
      name: 'Facebook',
      Icon: BsFacebook ,
      url: '#', // Reemplaza con el enlace real
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700'
    },
    {
      id: 2,
      name: 'WhatsApp',
      Icon: BsWhatsapp, // Usamos MessageCircle en lugar de WhatsApp
      url: '#', // Reemplaza con el enlace real, ej. https://wa.me/tu-numero
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600'
    },
    {
      id: 3,
      name: 'YouTube',
      Icon: BsYoutube , // Usamos el componente Youtube de Lucide
      url: '#', // Reemplaza con el enlace real
      color: 'bg-red-600',
      hoverColor: 'hover:bg-red-700'
    },
    {
      id: 4,
      name: 'Instagram',
      Icon: BsInstagram ,
      url: '#', // Reemplaza con el enlace real
      color: 'bg-pink-600',
      hoverColor: 'hover:bg-pink-700'
    },
    {
      id: 5,
      name: 'X',
      Icon: BsTwitterX, // Usamos el componente Twitter de Lucide
      url: '#', // Reemplaza con el enlace real
      color: 'bg-black',
      hoverColor: 'hover:bg-black-500'
    }
  ];

  return (
    <div className="fixed left-3 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col items-center space-y-4">
      {socialLinks.map((social) => (
        <a
          key={social.id}
          href={social.url}
          className={`${social.color} ${social.hoverColor} w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 shadow-lg`}
          aria-label={social.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <social.Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
};

export default FloatingIcons;