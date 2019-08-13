// pagina de login

import React from 'react';
import { Link } from 'react-router-dom';

import { IoMdPaw } from 'react-icons/io'; // importação do icone pet de uma biblioteca

export default function SignIn() {
  return (
    <>
      <h1>
        <IoMdPaw size="135" />
        <h2>Pet Codes</h2>
      </h1>
      <form>
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua Senha" />

        <button type="submit">Acessar</button>
        <Link to="/signup">Criar Conta</Link>
      </form>
    </>
  );
}
