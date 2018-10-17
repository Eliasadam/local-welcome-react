import React, { Component } from 'react';
//import { Formik } from 'formik';
//import * as Yup from 'yup';
import DashboardPage from './components/pages/DashboardPage';
import FormikEnhancer from './components/FormikEnhancer';
import users from './data/login.json';
import './App.css';

class App extends Component {
//   state = {
//     isLoggedIn: false,
//     userValue: '',
//     passwordValue: '',
//     errorMessage: ''
//   };
//   handleUserChange = e => {
//     this.setState({
//       userValue: e.target.value,
//     });
//   };
//   handlePasswordChange = e => {
//     this.setState({
//       passwordValue: e.target.value,
//     });
//   };
//   loginMe = e => {
//     e.preventDefault();

//     const authorised = users.some(
//       ({ user, password }) =>
//         user === this.state.userValue && password === this.state.passwordValue
//     );

//     this.setState({
//       isLoggedIn: authorised,
//       errorMessage: authorised ? null : 'Invalid username or password',
//     });
//   };

  render() {
    return (
     
      <div className="App">
     
          <FormikEnhancer />
        
      </div>
    );
  }
}


export default App;
