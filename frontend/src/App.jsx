import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            <Routes>
              {/* Ruta principal */}
              <Route path="/" element={<Home />} />
              
              {/* Aquí puedes agregar otras rutas en el futuro: */}
              {/* <Route path="/noticias" element={<Noticias />} /> */}
              {/* <Route path="/contacto" element={<Contacto />} /> */}
            </Routes>
          </main>
          {/* Aquí puedes agregar un footer si es necesario */}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;