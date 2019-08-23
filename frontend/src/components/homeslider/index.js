import React from 'react';
import pet1 from '../../data/pet1.jpg';
import pet2 from '../../data/pet2.jpg';
import pet3 from '../../data/pet3.jpg';

/* Componente central slider para campanhas

  Disponiveis para adoção
  Animais que acabaram de ser adotados
  Animais encontrados

*/
export default function HomeSlider() {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src={pet1}
              alt="Primeiro Slide"
            ></img>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={pet2} alt="Segundo Slide"></img>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={pet3}
              alt="Terceiro Slide"
            ></img>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Anterior</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Próximo</span>
        </a>
      </div>
    </>
  );
}
