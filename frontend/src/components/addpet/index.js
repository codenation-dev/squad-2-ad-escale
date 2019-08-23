import React from 'react';
import { Container, Form, Col, Button } from 'react-bootstrap';

export default function AddPet() {
  return (
    <>
      <Form>
        <Container>
          <Form.Row>
            <Form.Group controlId="formGridUser">
              <Form.Control placeholder="Id" />
            </Form.Group>

            <Form.Group controlId="formGridNamePet">
              <Form.Control placeholder="Nome do Pet" />
            </Form.Group>

            <Form.Group controlId="formGridPetType">
              <Form.Control placeholder="Tipo do Pet" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridGenero">
              <Form.Control as="select">
                <option>Gênero...</option>
                <option>M</option>
                <option>F</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridSize">
              <Form.Control as="select">
                <option>Porte...</option>
                <option>Pequeno</option>
                <option>Médio</option>
                <option>Grande</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Group as={Col} controlId="formGridContato">
            <Form.Control type="password" placeholder="Nome do Contato" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control type="email" placeholder="Email do contato" />
          </Form.Group>

          <Form.Group controlId="formGridPhone1">
            <Form.Control placeholder="Celular" />
          </Form.Group>

          <Form.Group controlId="formGridPhone2">
            <Form.Control placeholder="Telefone" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Control as="select">
              <option>UF...</option>
              <option>SP</option>
            </Form.Control>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Control placeholder="Cidade" />
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit">
            Adicionar
          </Button>
        </Container>
      </Form>
    </>
  );
}
