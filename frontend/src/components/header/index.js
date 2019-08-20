import React from 'react';
import './index.css';
/* Componente cabeçalho, carrega logotipo, main links, componente de busca geral no site
 link para se inscrever e fazer login no site
 
 Componentes: 
 -Logotipo
 -Campo de Busca Geral no Site(igual o recipes, busca abrangente com rotas inclusive)
 -SignIn
 -SignUp

 */
export default function Header() {
  return (
    <>
      <div className="header">
        <nab-brand>PetCodes</nab-brand>
      </div>
    </>
  );
}
