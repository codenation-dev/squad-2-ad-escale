import React from 'react';

/* Componente de filtro central, com as principais opções de filtro
  
  Categorias básicas
  
  - Achados
  - Perdidos
  - Adoção

  - Outros filtros que podem ser explorados


*/
export default function HomeFilter({ handle }) {
  return (
    <>
      <nav>
        <button
          onClick={e => {
            handle(e);
          }}
          value="achados"
        >
          Achados
        </button>
        <button
          onClick={e => {
            handle(e);
          }}
          value="perdidos"
        >
          Perdidos
        </button>
        <button
          onClick={e => {
            handle(e);
          }}
          value="adocao"
        >
          Adoção
        </button>
      </nav>
    </>
  );
}
