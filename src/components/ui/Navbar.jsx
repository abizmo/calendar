import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-dark bg-dark">
    <span className="navbar-brand">Goccita</span>
    <button
      className="btn btn-outline-secondary"
      type="button"
    >
      <i className="fas fa-sign-out-alt" />
      <span> Salir</span>
    </button>
  </nav>
);

export default Navbar;
