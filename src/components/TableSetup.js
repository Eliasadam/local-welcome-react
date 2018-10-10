import React from 'react';
import logo from '../images/logo.svg';
console.log('logo', logo);
const btnHandle = e => {
  console.log('event', e.target.value);
};
const TableSetup = () => (
  <div>
    <h2>Welcome to Table setup</h2>
    <img src={logo} alt="No img" />
    <input type="button" onClick={btnHandle} value="2" />
  </div>
);
export default TableSetup;
