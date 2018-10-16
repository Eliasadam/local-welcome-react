import React, { Component } from 'react';
import DashboardPage from './components/pages/DashboardPage';
import LoginPage from './components/pages/Loginpage';
import users from './data/login.json';
import './App.css';

class App extends Component {
  state = {
    isLoggedIn: false,
    userValue: '',
    passwordValue: '',
    errorMessage: '',
  };
  handleUserChange = e => {
    this.setState({
      userValue: e.target.value,
    });
  };
  handlePasswordChange = e => {
    this.setState({
      passwordValue: e.target.value,
    });
  };
  loginMe = e => {
    e.preventDefault();

    const authorised = users.some(
      ({ user, password }) =>
        user === this.state.userValue && password === this.state.passwordValue
    );

    this.setState({
      isLoggedIn: authorised,
      errorMessage: authorised ? null : 'Invalid username or password',
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.isLoggedIn ? (
          <DashboardPage />
        ) : (
          <div>
            <form onSubmit={this.loginMe}>
              <p className="errorMessage">{this.state.errorMessage}</p>
              <ul>
                <li>
                  <label>User Name:</label>
                  <input type="text" onChange={this.handleUserChange} />
                </li>
                <p />
                <li>
                  <label>Password:</label>
                  <input type="password" onChange={this.handlePasswordChange} />
                </li>
              </ul>

              <LoginPage loginMe={this.loginMe} />
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default App;
