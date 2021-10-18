/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import '../styles/login.css';

const LoginPage = () => (
  <div className="container login-container">
    <div className="row">
      <div className="col-md-6 login-form">
        <form className="form-signin">
          <h3>Sign In</h3>
          <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
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

export default LoginPage;
