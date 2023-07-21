import React from 'react';

function Nota({ nota, onMarcarImportante }) {
  const { titulo, descripcion, importante } = nota;

  return (
    <div className={`card ${importante ? 'border-danger' : 'border-secondary'}`}>
      <span className={`badge position-absolute top-0 end-0 ${importante ? 'bg-danger' : 'bg-secondary text-white'}`}>
        {importante ? 'Importante' : 'Normal'}
      </span>
      <h5
        className={`card-header ${
          importante ? 'bg-danger text-white' : 'bg-secondary text-white'
        }`}
      >
        {titulo || 'Sin título'}
      </h5>
      <div className={`card-body ${importante ? 'text-white' : 'text-white'}`}>
        <p className={`card-text ${importante ? 'text-white' : 'text-white'}`}>
          {descripcion}
        </p>
        <button
          onClick={() => onMarcarImportante(nota.id)}
          className={`btn btn-sm ${importante ? 'btn-secondary' : 'btn-secondary text-white'}`}
        >
          {importante ? 'Set Normal' : 'Set Importante'}
        </button>
      </div>
    </div>
  );
}

export default Nota;









