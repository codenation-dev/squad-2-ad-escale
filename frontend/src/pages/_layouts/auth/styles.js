// pagina de estilos para quem esta logado

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

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.4);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #0000cd;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #333;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
    }

    a {
      color: #0000cd;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;
    }
  }
`;
