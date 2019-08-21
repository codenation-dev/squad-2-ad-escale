import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './styles.css';

// Componente de footer global
export default function Footer() {
  return (
    <>
      <Row className="Footer">
        <Col xs={12} className="d-flex justify-content-center">
          @2019 Petcodes.com
        </Col>
        <Col xs={12} className="d-flex justify-content-center">
          Todas as marcas pertencem a Petcodes S.A. ou são usadas com permissão
        </Col>
        <Col xs={6} className="d-flex justify-content-center">
          Facebook
        </Col>
        <Col xs={6} className="d-flex justify-content-center">
          Instagram
        </Col>
      </Row>
    </>
  );
}
