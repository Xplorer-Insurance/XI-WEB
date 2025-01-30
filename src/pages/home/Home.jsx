import React, { useEffect } from 'react';
import './home.css';

export const Home = () => {
  useEffect(() => {
    // Seleccionar el contenedor del fondo
    const container = document.querySelector('.galaxy-background');

    // Crear una estrella
    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'star';
      // Tamaño aleatorio entre 1px y 3px
      const size = Math.random() * 3 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      // Posición aleatoria dentro del contenedor
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}%`;
      // Añadir al contenedor
      container.appendChild(star);
    };

    // Generar 200 estrellas
    for (let i = 0; i < 200; i++) {
      createStar();
    }
  }, []);

  return (
    <div className="galaxy-background" style={{ paddingLeft: '255px' }}>
      <h1 className="center-title">Xplorer Insurance</h1>
    </div>
  );
};
