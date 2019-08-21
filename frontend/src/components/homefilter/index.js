import React from 'react';
<<<<<<< HEAD
import { Button, ButtonGroup, Col, Row } from 'react-bootstrap';
import './styles.css';

=======
import { Button, ButtonGroup, Container, Row } from 'react-bootstrap';
import './index.css';
>>>>>>> ee7dda92f5f46a402d0cd811e2acb644eb7828bf
/* Componente de filtro central, com as principais opções de filtro
  
  Categorias básicas
  
  - Achados
  - Perdidos
  - Adoção

  - Outros filtros que podem ser explorados


*/
export default function HomeFilter({ handle }) {
  return (
    <>
      <Row>
        <Col xs>
          <div className="d-flex justify-content-center">
            <ButtonGroup className="HomeFilter" size="lg">
              <Button
                name="Encontrados"
                onClick={e => {
                  handle(e);
                }}
              >
                Achados
              </Button>
              <Button
                name="Perdidos"
                onClick={e => {
                  handle(e);
                }}
              >
                Perdidos
              </Button>
              <Button
                name="Adocao"
                onClick={e => {
                  handle(e);
                }}
              >
                Adoção
              </Button>
            </ButtonGroup>
          </div>
        </Col>
      </Row>
    </>
  );
}
