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



  img {
      height: 200px;
      width: 200px;
      border-radius: 50%;
      border: 3px solid;
      background:#fff;
    }

    h1 {
      text-align: center;
    }



  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;


    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #191970;
      margin: 0 0 10px;
    }

      &::placeholder {
      color: rgba(255, 255, 255, 0.2);
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #191970;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
    }

    a {
      color: #191970;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
