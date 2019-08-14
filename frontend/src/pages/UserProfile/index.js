// pagina de perfil de usuario

import React from 'react';

export default function UserProfile() {
  return (
    <>
      <h1>
        <h2>Pet Codes</h2>
      </h1>
      <form>
        Nome: <input type="text" placeholder="Seu nome" value="Helio" />
        Sobrenome:{' '}
        <input type="text" placeholder="Seu sobrenome" value="Breve" />
        Data de Nascimento: <input type="date" value="" />
        Telefone:{' '}
        <input type="tel" placeholder="Seu telefone" value="11987654321" />
        Endereço: <input type="text" placeholder="Seu endereco" value="" />
        Número: <input type="number" placeholder="111" value="" />
        Complemento:{' '}
        <input type="text" placeholder="Apartamento, bloco, casa" value="12A" />
        Bairro:
        <input type="text" placeholder="Seu bairro" value="" />
        Cidade:
        <input type="text" placeholder="Nome Cidade" value="" />
        Estado:
        <input type="text" placeholder="AA" value="" />
        CEP:
        <input type="number" placeholder="00000-000" value="" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua Senha" />
        <button type="submit">Acessar</button>
      </form>
    </>
  );
}
