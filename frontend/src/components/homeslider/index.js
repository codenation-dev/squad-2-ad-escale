import React from 'react';
import pet1 from '../../data/pet1.jpg';
import pet2 from '../../data/pet2.jpg';
import pet3 from '../../data/pet3.jpg';
import pet4 from '../../data/pet4.jpg';

/* Componente central slider para campanhas

  Disponiveis para adoção
  Animais que acabaram de ser adotados
  Animais encontrados

*/
export default function HomeSlider() {
  return (
    <>
      <div className="row" style={{ marginTop: '1rem' }}>
        <div className="col">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner ">
              <div className="carousel-item active">
                <img
                  className="img-fluid rounded mx-auto d-block"
                  src={pet1}
                  alt="Primeiro Slide"
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  className="img-fluid rounded mx-auto d-block"
                  src={pet2}
                  alt="Segundo Slide"
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  className="img-fluid rounded mx-auto d-block"
                  src={pet3}
                  alt="Terceiro Slide"
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  className="img-fluid rounded mx-auto d-block"
                  src={pet4}
                  alt="Quarto Slide"
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
        </div>
      </div>
    </>
  );
}
