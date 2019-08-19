import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Petcard from '../petcard';
// Componente de conteúdo da home, o body efetivamente

export default function HomeContent({ pets }) {
  return (
    <>
      <Container>
        <Row>
          {pets.map(pet => {
            return (
              <Col key={pet.id}>
                <Petcard pet={pet} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
