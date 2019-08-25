import React from 'react';

/* Componente de filtro central, com as principais opções de filtro

  Categorias básicas

  - Achados
  - Perdidos
  - Adoção

  - Outros filtros que podem ser explorados


*/
export default function HomeFilter({
  handleAchados,
  handleAdocao,
  handlePerdidos,
}) {
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
            name="Encontrados"
            onClick={e => {
              handleAchados(e);
            }}
          >
            Achados
          </button>
          <button
            type="button"
            className="btn btn-danger"
            name="Perdidos"
            onClick={e => {
              handlePerdidos(e);
            }}
          >
            Perdidos
          </button>
          <button
            type="button"
            className="btn btn-info"
            name="Adocao"
            onClick={e => {
              handleAdocao(e);
            }}
          >
            Adoação
          </button>
        </div>
      </div>
    </>
  );
}
