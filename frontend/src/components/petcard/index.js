import React from 'react';
import { Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import pet3 from '../../data/pet3.jpg';
import './styles.css';

// Componente de footer global
export default function Petcard({ pet }) {
  const { image = pet3, name, description, gender, city, state, age } = pet;
  return (
    <>
      <Row>
        <Col xs className="d-flex justify-content-center">
          <Card className="PetCard" br="light" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{gender}</ListGroupItem>
              <ListGroupItem>{`${city}, ${state}`}</ListGroupItem>
              <ListGroupItem>{age}</ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}
