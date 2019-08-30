import React from 'react';
import Petcard from '../petcard';

export default function HomeContent({ pets }) {
  return (
    <>
      <div className="row">
        {pets.map(pet => {
          return (
            <div className="col-6 col-md-4" key={pet.id}>
              <Petcard pet={pet} />
            </div>
          );
        })}
      </div>
    </>
  );
}
