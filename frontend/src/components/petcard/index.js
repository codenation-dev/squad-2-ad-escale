import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

// Componente de footer global
export default function Petcard({ pet }) {
  const { image = 'image', name, description, gender, city, state, age } = pet;
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image[0]} />
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
    </>
  );
}
