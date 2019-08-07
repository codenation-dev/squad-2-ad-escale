import React from 'react';
import { Link } from 'react-router-dom';

import { IoMdPaw } from 'react-icons/io';

export default function Sign() {
  return (
    <>
      <IoMdPaw size="130" color="#191970" />
      <h1>Pet Codes</h1>
      <form>
        <input placeholder="Nome Completo" />
        <input type="email" placeholder="Seu Email" />
        <input type="password" placeholder="Sua Senha" />

        <button type="submit">Criar Conta</button>
        <Link to="/signin">Já tenho login</Link>
      </form>
    </>
  );
}
