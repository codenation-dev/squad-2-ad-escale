// estilos da pagina para quem nao esta logado

import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  section {
    height: 500px;
    width: 350px;
    background: rgba(0, 0, 0, 0.4);
    border: 0;
    border-radius: 4px;
    padding: 0 15px;
    margin: 0 0 10px;

    div {
      height: 100px;
      width: 394px;
    }

    img {
      height: 200px;
      width: 200px;
      border-radius: 50%;
      border: 3px solid;
      background: #fff;
    }

    h1 {
      text-align: center;
    }

    span {
      color: #0000cd;
    }
  }
`;
