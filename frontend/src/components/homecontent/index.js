import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Petcard from '../petcard';
// Componente de conteúdo da home, o body efetivamente

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
