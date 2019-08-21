import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Petcard from '../petcard';
import './index.css';

export default function HomeContent({ pets }) {
  return (
    <>
<<<<<<< HEAD
      <Row>
        <Col xs>
          {pets.map(pet => {
            return (
              <Col key={pet.id}>
                <Petcard pet={pet} />
              </Col>
            );
          })}
        </Col>
=======
      <Row className="home-content">
        {pets.map(pet => {
          return (
            <Col key={pet.id}>
              <Petcard pet={pet} />
            </Col>
          );
        })}
>>>>>>> ee7dda92f5f46a402d0cd811e2acb644eb7828bf
      </Row>
    </>
  );
}
