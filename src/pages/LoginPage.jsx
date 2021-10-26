import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import { loginStart, registerStart } from '../actions/auth';
import useForm from '../hooks/useForm';

import '../styles/login.css';

const initLogin = {
  loginEmail: '',
  loginPassword: '',
};

const initRegister = {
  confirmPassword: '',
  email: '',
  name: '',
  password: '',
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const [{ loginEmail, loginPassword }, changeLoginInputs, resetLoginInputs] = useForm(initLogin);
  const [registerInputs, changeRegisterInputs, resetRegisterInputs] = useForm(initRegister);

  const handleLogin = (evt) => {
    evt.preventDefault();

    // TODO: Validations?
    dispatch(loginStart({
      email: loginEmail,
      password: loginPassword,
    }));
    resetLoginInputs();
  };

  const handleLoginChange = ({ target }) => changeLoginInputs(target);

  const handleRegister = (evt) => {
    evt.preventDefault();
    const {
      confirmPassword, email, name, password,
    } = registerInputs;

    // TODO: more validations?
    if (password !== confirmPassword) {
      Swal.fire('Error', 'Both passwords have to been equal', 'error');
    } else {
      dispatch(registerStart({ email, name, password }));
      resetRegisterInputs();
    }
  };

  const handleRegisterChange = ({ target }) => changeRegisterInputs(target);

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form">
          <form
            className="form-signin"
            onSubmit={handleLogin}
          >
            <h3>Sign In</h3>
            <input
              className="form-control"
              id="inputEmail"
              name="loginEmail"
              onChange={handleLoginChange}
              placeholder="Email address"
              required
              type="email"
              value={loginEmail}
            />
            <input
              className="form-control"
              id="inputPassword"
              name="loginPassword"
              onChange={handleLoginChange}
              placeholder="Password"
              required
              type="password"
              value={loginPassword}
            />
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          </form>
        </div>
        <div className="col-md-6 login-form dark">
          <form
            className="form-signup"
            onSubmit={handleRegister}
          >
            <h3>Sign Up</h3>
            <input
              className="form-control"
              id="name"
              name="name"
              onChange={handleRegisterChange}
              placeholder="Name"
              required
              type="text"
              value={registerInputs.name}
            />
            <input
              className="form-control"
              id="email"
              name="email"
              onChange={handleRegisterChange}
              placeholder="Email address"
              required
              type="email"
              value={registerInputs.email}
            />
            <input
              className="form-control"
              id="password"
              name="password"
              onChange={handleRegisterChange}
              placeholder="Password"
              required
              type="password"
              value={registerInputs.password}
            />
            <input
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              onChange={handleRegisterChange}
              placeholder="Repeat password"
              required
              type="password"
              value={registerInputs.confirmPassword}
            />
            <button
              className="btn btn-lg btn-primary btn-block"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
