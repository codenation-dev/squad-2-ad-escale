import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Review = props => {
  const [state, setState] = useState({ name: '', tel: '', msg: '' });

  useEffect(() => {
    const { steps } = props;
    const { name, tel, msg } = steps;
    setState({ name, tel, msg });
  }, [props]);

  const { name, tel, msg } = state;
  return (
    <>
      <div style={{ width: '100%' }}>
        <h3>Resumo</h3>
        <table>
          <tbody>
            <tr>
              <td>Nome:</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Contato</td>
              <tr>{tel.value}</tr>
            </tr>
            <tr>
              <td>Mensagem:</td>
              <tr>{msg.value}</tr>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

export default Review;
