import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../../actions/auth';

const Navbar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand">{name}</span>
      <button
        className="btn btn-outline-secondary"
        onClick={handleLogout}
        type="button"
      >
        <i className="fas fa-sign-out-alt" />
        <span> Salir</span>
      </button>
    </nav>
  );
};

export default Navbar;
