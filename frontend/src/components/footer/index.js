import React from 'react';

// Componente de footer global
export default function Footer() {
  return (
    <>
      <div style={{ bottom: '0', width: '100%' }}>
        <nav className="navbar sticky-bottom navbar-light bg-light">
          <span
            className="navbar-brand mb-0 h1"
            style={{ paddingLeft: '20px' }}
          >
            Footer
          </span>
        </nav>
      </div>
    </>
  );
}
