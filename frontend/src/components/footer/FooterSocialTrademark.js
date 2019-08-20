import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

// Componente de footer para marca registrada, redes socias e etc.
export default function FooterSocialTrademark({ classNameProp }) {
  return (
    <>
      <Row className={classNameProp}>
        <Col>@2019 Petcodes.com</Col>
        <Col>
          Todas as marcas pertencem a Petcodes S.A. ou são usadas com permissão
        </Col>
        <Col>
          <Col>Facebook</Col>
          <Col>Instagram</Col>
        </Col>
      </Row>
    </>
  );
}
