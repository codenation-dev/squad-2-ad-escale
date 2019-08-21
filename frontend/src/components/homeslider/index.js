import React from 'react';
<<<<<<< HEAD
import { Col, Row, Carousel } from 'react-bootstrap';
import './styles.css';
import pet1 from '../../data/pet1.jpg';
import pet2 from '../../data/pet2.jpg';
import pet3 from '../../data/pet3.jpg';

=======
import { Container, Row, Carousel } from 'react-bootstrap';
import './index.css';
>>>>>>> ee7dda92f5f46a402d0cd811e2acb644eb7828bf
/* Componente central slider para campanhas

  Disponiveis para adoção
  Animais que acabaram de ser adotados
  Animais encontrados

*/
export default function HomeSlider() {
  return (
    <>
<<<<<<< HEAD
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
=======
      <Row className="slider">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
>>>>>>> ee7dda92f5f46a402d0cd811e2acb644eb7828bf
      </Row>
    </>
  );
}
