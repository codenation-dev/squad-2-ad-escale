import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  text-align: center;

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

  #divslider {
    height: 300px;
    max-width: 350px;
  }
`;
