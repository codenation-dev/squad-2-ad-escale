import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function FooterNav({ classNameProp }) {
  return (
    <>
      <Row className={classNameProp}>
        <Col>
          <h1>FooterNav</h1>
        </Col>
      </Row>
    </>
  );
}
