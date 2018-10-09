import React from 'react';
import { Link } from 'react-router-dom';
const LoginPage = props => (
  <div>
    <h2>Welcome to Login page!</h2>
    <Link to="/dashboard" onClick={props.loginMe}>
      {' '}
      Log in{' '}
    </Link>
  </div>
);
export default LoginPage;
