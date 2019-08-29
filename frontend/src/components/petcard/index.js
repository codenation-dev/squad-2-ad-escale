import React from 'react';
import { Link } from 'react-router-dom';

// Componente pet
export default function Petcard({ pet }) {
  const { id, image = {}, name, category, gender, city, state } = pet;
  const uri = `/petprofile/${id}`;
  return (
    <>
      <Link to={uri} style={{ clearfix: 'true' }}>
        <div className="col-sm w-100 p-3 mh-100">
          <div className="card">
            {image[0] !== undefined ? (
              <img
                className="card-img-top rounded mx-auto d-block"
                style={{ padding: '1rem' }}
                src={image[0]}
                alt="Card image cap"
              />
            ) : (
              <svg style={{ backgroundColor: 'lightGray' }}></svg>
            )}
            <div className="card-block">
              <h4 className="card-title" style={{ margin: '1rem 1rem 0 1rem' }}>
                {name}
              </h4>
              <p className="card-text" style={{ margin: '0 1rem 0 1rem' }}>
                {category === 'ENCONTRADOS'
                  ? 'Encontrados'
                  : category === 'ADOCAO'
                  ? 'Adoção'
                  : 'Perdidos'}
              </p>
              <p className="card-text" style={{ margin: '0 1rem 1rem 1rem' }}>
                {city}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
