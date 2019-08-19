import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

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
      <div className="d-flex flex-column">
        <ButtonGroup size="lg">
          <Button
            onClick={e => {
              handle(e);
            }}
            value="achados"
          >
            Achados
          </Button>
          <Button
            onClick={e => {
              handle(e);
            }}
            value="perdidos"
          >
            Perdidos
          </Button>
          <Button
            onClick={e => {
              handle(e);
            }}
            value="adocao"
          >
            Adoção
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
}
