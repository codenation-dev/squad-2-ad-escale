import React from 'react';
import { Button, ButtonGroup, Container, Row } from 'react-bootstrap';
import './index.css';
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
      <Row className="home-filter">
        <div className="d-flex flex-column">
          <ButtonGroup size="lg">
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
      </Row>
    </>
  );
}
