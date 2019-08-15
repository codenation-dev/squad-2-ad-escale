// pagina de perfil de usuario

import React from 'react';

export default function UserProfile() {
  return (
    <>
      <h1>
        <h2>User Profile</h2>
      </h1>
      <form>
        <input type="text" placeholder="Seu Nome" />
        <input type="text" placeholder="Seu Sobrenome" />
        <input type="tel" placeholder="Seu Telefone" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua Senha" />

        <button type="submit">Acessar</button>
        
      </form>
    </>
  );
}
