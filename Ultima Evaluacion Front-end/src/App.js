import React, { useEffect } from 'react';
import './App.css';
import ListaNotas from './components/ListaNotas';
import './styles.css';

function App() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 300; 
      const scrollButton = document.getElementById('scrollButton');

      if (scrollY > scrollThreshold) {
        scrollButton.classList.add('show');
      } else {
        scrollButton.classList.remove('show');
      }
    };

    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Notas/Recordatorios</h1>
      <ListaNotas />
      <button id="scrollButton" className="btn btn-cil position-fixed bottom-0 end-0 mb-3 me-3" onClick={scrollToTop}> ↑ </button>
    </div>
  );
}

export default App;
