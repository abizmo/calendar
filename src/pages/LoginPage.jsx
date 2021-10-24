import React from 'react';
import { useDispatch } from 'react-redux';
import { loginStart } from '../actions/auth';
import useForm from '../hooks/useForm';

import '../styles/login.css';

const initLogin = {
  loginEmail: 'test1@email.com',
  loginPassword: '123456',
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const [{ loginEmail, loginPassword }, changeLoginInputs, resetLoginInputs] = useForm(initLogin);

  const handleLoginChange = ({ target }) => changeLoginInputs(target);
  const handleLogin = (evt) => {
    evt.preventDefault();
    dispatch(loginStart({
      email: loginEmail,
      password: loginPassword,
    }));
    resetLoginInputs();
  };

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
          <form className="form-signup">
            <h3>Sign Up</h3>
            <input type="text" id="name" className="form-control" placeholder="Name" required />
            <input type="email" id="email" className="form-control" placeholder="Email address" required />
            <input type="password" id="password" className="form-control" placeholder="Password" required />
            <input type="password" id="confirmPassword" className="form-control" placeholder="Repeat password" required />
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
