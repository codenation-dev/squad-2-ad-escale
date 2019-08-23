import React from 'react';
import pet3 from '../../data/pet3.jpg';

// Componente de footer global
export default function Petcard({ pet }) {
  const { image = pet3, name, description, gender, city, state, age } = pet;
  return (
    <>
      <div className="col-12 col-sm-4" style={{ paddingTop: '7px' }}>
        <div className="card">
          <img
            className="card-img-top rounded mx-auto d-block"
            style={{ paddingTop: '5px', width: '100px', heigt: '100px' }}
            src="pet3"
            alt="Card image cap"
          />
          <div className="card-block">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{description}</p>
            {/* <button className="btn btn-primary" onClick={props.action}>
              {name}
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}
