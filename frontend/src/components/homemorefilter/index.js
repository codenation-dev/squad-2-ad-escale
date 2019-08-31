/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
/* Componente de filtro central, com as principais opções de filtro

  Categorias básicas

  - Achados
  - Perdidos
  - Adoção

  - Outros filtros que podem ser explorados


*/


export default function HomeMoreFilter({ handleGetMoreFilteredPets }) {
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
              Tipo            
            </button>
            <div className="dropdown-menu">
              <div                
                className="dropdown-item"
                name="1"
                onClick={e =>{
                  handleGetMoreFilteredPets(e.target.name);
                }}
                >
                Cachorro              
              </div>
              <div
              name="2"

                className="dropdown-item"
                onClick={e => handleGetMoreFilteredPets(e)}
              >
                Gato
              </div>
              
              
            </div>
          </div>
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
              <div                
                className="dropdown-item"
                name="p"
                onClick={e =>{
                  handleGetMoreFilteredPets(e.target.name);
                }}
                >
                Pequeno              
              </div>
              <div
              name="m"

                className="dropdown-item"
                onClick={e => handleGetMoreFilteredPets(e)}
              >
                Médio
              </div>
              <div
              name="g"
                className="dropdown-item"
                onClick={e => handleGetMoreFilteredPets(e)}
              >
                Grande
              </div>
              
            </div>
          </div>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-danger dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Gênero            
            </button>
            <div className="dropdown-menu">
              <div                
                className="dropdown-item"
                name="f"
                onClick={e =>{
                  handleGetMoreFilteredPets(e.target.name);
                }}
                >
                Fêmea             
              </div>
              <div
              name="m"

                className="dropdown-item"
                onClick={e => handleGetMoreFilteredPets(e)}
              >
                Macho
              </div>
              
              
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



          {/* Teste com Select do react bootstrap 

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

*/
