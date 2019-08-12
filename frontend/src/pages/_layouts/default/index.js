// rotas de pagina padrao para quem nao esta logado

import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
