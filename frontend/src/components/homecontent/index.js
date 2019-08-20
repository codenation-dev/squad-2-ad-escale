import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Petcard from '../petcard';
import './index.css';

export default function HomeContent({ pets }) {
  return (
    <>
      <Row className="home-content">
        {pets.map(pet => {
          return (
            <Col key={pet.id}>
              <Petcard pet={pet} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
