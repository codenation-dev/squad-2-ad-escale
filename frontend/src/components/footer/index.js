import React from 'react';
<<<<<<< HEAD
import { Row, Col } from 'react-bootstrap';
import './styles.css';
=======
import FooterNav from './FooterNav';
import FooterSocialTrademark from './FooterSocialTrademark';
import './index.css';
>>>>>>> ee7dda92f5f46a402d0cd811e2acb644eb7828bf

// Componente de footer global
export default function Footer() {
  return (
    <>
<<<<<<< HEAD
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
=======
      <FooterNav classNameProp="footer-nav" />
      <FooterSocialTrademark classNameProp="footer-social" />
>>>>>>> ee7dda92f5f46a402d0cd811e2acb644eb7828bf
    </>
  );
}
