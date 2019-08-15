// pagina de estilos para quem esta logado

import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  {/*align-items: center; */} 
`;

export const Content = styled.div`
  width: 100%;
  max-width: 500px;
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
  #footerpetprofile {
    height: 50px;
    background: #333;
    color: #fff;
  }

  #headerpetprofile {
    display: flex;
    flex-direction: row;
    height: 50px;
    background: #333;
    color: #fff;
    justify-content: space-between;

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
    }
  }

  #divpetprofile {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
