import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Petcard from '../petcard';
import './index.css';

export default function HomeContent({ pets }) {
  return (
    <>
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
      </Row>
    </>
  );
}
