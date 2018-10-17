import React, { Component } from 'react';
//import { Formik } from 'formik';
//import * as Yup from 'yup';
import DashboardPage from './components/pages/DashboardPage';
import FormikEnhancer from './components/FormikEnhancer';
import users from './data/login.json';
import './App.css';

class App extends Component {
  state = {
    isLoggedIn: false,
  };
  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    return this.state.isLoggedIn ? (
      <DashboardPage />
    ) : (
      <div className="App">
        <FormikEnhancer handleLogin={this.handleLogin} />
      </div>
    );
  }
}

export default App;
