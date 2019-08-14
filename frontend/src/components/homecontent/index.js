import React from 'react';

// Componente de conteúdo da home, o body efetivamente
export default function HomeContent({ pets }) {
  return (
    <>
      {pets.map(item => {
        return (
          <h1>{`${item.especie}, ${item.nome}, ${item.raca}, ${item.status}.`}</h1>
        );
      })}
    </>
  );
}
