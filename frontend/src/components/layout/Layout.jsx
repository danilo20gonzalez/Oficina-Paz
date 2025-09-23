// src/components/layout/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'; 

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16"> {/* pt-16 para compensar navbar fijo */}
        {children}
      </main>
      <Footer /> 
    </div>
  );
};

export default Layout;