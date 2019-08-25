import React from 'react';

/* Componente de filtro central, com as principais opções de filtro

  Categorias básicas

  - Achados
  - Perdidos
  - Adoção

  - Outros filtros que podem ser explorados


*/
export default function HomeFilter({ handleGetFilteredPets }) {
  return (
    <>
      <div
        className="container"
        style={{ textAlign: 'center', padding: '12px' }}
      >
        <div className="btn-group" role="group" aria-label="Exemplo básico">
          <button
            type="button"
            className="btn btn-warning"
            name="ENCONTRADOS"
            onClick={e => {
              handleGetFilteredPets(e.target.name);
            }}
          >
            Achados
          </button>
          <button
            type="button"
            className="btn btn-danger"
            name="PROCURA_SE"
            onClick={e => {
              handleGetFilteredPets(e.target.name);
            }}
          >
            Perdidos
          </button>
          <button
            type="button"
            className="btn btn-info"
            name="ADOCAO"
            onClick={e => {
              handleGetFilteredPets(e.target.name);
            }}
          >
            Adoação
          </button>
        </div>
      </div>
    </>
  );
}
