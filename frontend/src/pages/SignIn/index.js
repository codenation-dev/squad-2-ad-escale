import React from 'react';
import { Link } from 'react-router-dom';

import { IoMdPaw } from 'react-icons/io';

export default function SignIn() {
  return (
    <>
      <IoMdPaw size="130" color="#191970" />
      <h1>Pet Codes</h1>
      <form>
        <input type="email" placeholder="Seu Email" />
        <input type="password" placeholder="Sua Senha" />

        <button type="submit">Acessar</button>
        <Link to="/signup">Crie sua conta</Link>
      </form>
    </>
  );
}
