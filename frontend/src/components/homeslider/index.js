import React from 'react';
import { Col, Row, Carousel } from 'react-bootstrap';
import './styles.css';
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
      <Row>
        <Col>
          <Carousel className="Carrousel">
            <Carousel.Item>
              <img className="d-block w-100" src={pet1} alt="First slide" />
              {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={pet2} alt="Third slide" />
              {/* <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={pet3} alt="Third slide" />

              {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </>
  );
}
