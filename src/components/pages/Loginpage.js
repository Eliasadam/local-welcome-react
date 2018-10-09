import React from 'react';
const LoginPage = props => (
  <div>
    <h2>Welcome to Login page!</h2>
    <button onClick={props.loginMe}> Log in </button>
  </div>
);
export default LoginPage;
