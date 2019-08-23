import React from 'react';
import pet3 from '../../data/pet3.jpg';
import { Link } from 'react-router-dom';

// Componente pet
export default function Petcard({ pet }) {
  const { image = pet3, name, description, gender, city, state, age } = pet;
  return (
    <>
      <div className="col-sm w-100 p-3 mh-100">
        <div className="card">
          <img
            className="card-img-top rounded mx-auto d-block"
            style={{ padding: '1rem' }}
            src={image}
            alt="Card image cap"
          />
          <div className="card-block">
            <h4 className="card-title" style={{ margin: '1rem' }}>
              {name}
            </h4>
            <p className="card-text" style={{ margin: '0 1rem 1rem 1rem' }}>
              "Olá, tudo bem"
            </p>
            <Link to="/petprofile">
              <button className="btn btn-primary" style={{ margin: '1rem' }}>
                Conhecer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
