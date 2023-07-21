import React, { useEffect, useRef, useState } from 'react';
import Nota from './Nota';
import { v4 as uuid } from 'uuid';

function ListaNotas() {
  const [notas, setNotas] = useState([]);
  const tituloRef = useRef();
  const descripcionRef = useRef();
  const [error, setError] = useState('');

  const KEY = 'notas-app-notas';

  useEffect(() => {
    const notasGuardadas = JSON.parse(localStorage.getItem(KEY));
    if (notasGuardadas) {
      setNotas(notasGuardadas);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(notas));
  }, [notas]);

  const agregarNota = (e) => {
    e.preventDefault();

    const titulo = tituloRef.current.value.trim();
    const descripcion = descripcionRef.current.value.trim();

    if (descripcion === '') {
      setError('¡Error! - La descripción es obligatoria');
      return;
    }

    setNotas((prevNotas) => {
      const nuevaNota = {
        id: uuid(),
        titulo: titulo || '',
        descripcion,
        importante: false,
      };
      return [...prevNotas, nuevaNota];
    });

    tituloRef.current.value = '';
    descripcionRef.current.value = '';
    setError('');
  };

  const marcarImportante = (id) => {
    setNotas((prevNotas) =>
      prevNotas.map((nota) =>
        nota.id === id ? { ...nota, importante: !nota.importante } : nota
      )
    );
  };

  return (
    <div className="form-container">
      <h6 className="mb-3 text-muted">Ingrese su nota/recordatorio</h6>
      <form onSubmit={agregarNota}>
        <div className="mb-3">
          <input ref={tituloRef} type="text" className="form-control" placeholder="Título (opcional)" />
        </div>
        <div className="mb-3">
          <textarea ref={descripcionRef} className="form-control" placeholder="Descripción"></textarea>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">Agregar Nota</button>
        </div>
      </form>
      {error && <p className="text-danger">{error}</p>}

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mt-4">
        {notas.map((nota) => (
          <div key={nota.id} className="col mb-4">
            <Nota nota={nota} onMarcarImportante={marcarImportante} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaNotas;

