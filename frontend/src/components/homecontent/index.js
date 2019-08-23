import React from 'react';
import Petcard from '../petcard';

export default function HomeContent({ pets }) {
  return (
    <>
      <div className="container">
        <div className="row">
          {pets.map(pet => {
            return (
              <div className="col-sm" key={pet.id}>
                <Petcard pet={pet} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
