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

        {/* Teste com <Link to = ""/> em droppdown button do bootstrap*/}


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

      {/* Teste com <Link to = ""/> em droppdown button do bootstrap*/}


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
           
      {/* Teste com Select do react bootstrap */}

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





/*
<button
            type="button"
            className="btn btn-warning"
            name="ANIMAL"
            onClick={e => {
              handleGetFilteredPets(e.target.name);
            }}
          >
            Tamanho
          </button>
          <button
            type="button"
            className="btn btn-secondary dropdown-toogle"
            name="TAMANHO"
            onClick={e => {
              handleGetFilteredPets(e.target.name);
            }}
          >
            Tamanho
          </button>
          <button
            type="button"
            className="btn btn-info"
            name="SEXO"
            onClick={e => {
              handleGetFilteredPets(e.target.name);
            }}
          >
            Sexo
          </button>

*/
