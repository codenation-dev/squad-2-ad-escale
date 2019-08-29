import React from 'react';
import { Link } from 'react-router-dom';

/* Componente de filtro central, com as principais opções de filtro

  Categorias básicas

  - Achados
  - Perdidos
  - Adoção

  - Outros filtros que podem ser explorados


*/
export default function HomeMoreFilter({ handleGetFilteredPets }) {
  return (
    <>
      <div
        className="container"
        style={{ textAlign: 'center', padding: '12px' }}
      >
        <div className="btn-group" role="group" aria-label="Exemplo básico">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-danger dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Tamanho
            </button>
            <div className="dropdown-menu">
              <Link to="/" className="dropdown-item">
                Mini
              </Link>
              <Link to="/" className="dropdown-item">
                Pequeno
              </Link>
              <Link to="/" className="dropdown-item">
                Medio
              </Link>
              <div className="dropdown-divider" />
              <Link to="/SignIn" className="dropdown-item">
                Grande
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
