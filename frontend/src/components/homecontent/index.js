import React from 'react';

// Componente de conteúdo da home, o body efetivamente
export default function HomeContent({ pets }) {
  return (
    <>
      {pets.map(item => {
        return (
          <h1>{`${item.name}, ${item.size}, ${item.category}, ${item.city} .`}</h1>
        );
      })}
    </>
  );
}
