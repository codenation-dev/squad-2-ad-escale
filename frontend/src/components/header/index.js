import React from 'react';
import { Navbar, Col } from 'react-bootstrap';

/* Componente cabeçalho, carrega logotipo, main links, componente de busca geral no site
 link para se inscrever e fazer login no site
 
 Componentes: 
 -Logotipo
 -Campo de Busca Geral no Site(igual o recipes, busca abrangente com rotas inclusive)
 -SignIn
 -SignUp

 */
export default function Header() {
  return (
    <>
      <Navbar navbar navbar-expand-lg fixed-top bg="dark" variant="dark">
        <Col xs>
          <Navbar.Brand href="#home">PetCodes</Navbar.Brand>
        </Col>
      </Navbar>
    </>
  );
}
