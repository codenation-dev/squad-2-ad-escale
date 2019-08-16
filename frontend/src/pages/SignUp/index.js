// pagina de cadastro

import React from 'react';
import { Link } from 'react-router-dom';

import { IoMdPaw } from 'react-icons/io'; // importação do icone pet de uma biblioteca

import { Wrapper, Container } from './styles';

export default function SignUp() {
  return (
    <>
      <Wrapper>
        <Container>
          <h1>
            <IoMdPaw size="135" />
            <h2>Pet Codes</h2>
          </h1>
          <form>
            <input placeholder="Nome Completo" />
            <input type="email" placeholder="Seu e-mail" />
            <input type="password" placeholder="Sua Senha" />

            <button type="submit">Criar Conta</button>
            <Link to="/signin">Já tenho uma conta</Link>
          </form>
        </Container>
      </Wrapper>
    </>
  );
}
