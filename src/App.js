import React, { Component } from 'react';
import DashboardPage from './components/pages/DashboardPage';
import LoginPage from './components/pages/Loginpage';
import data from './data/login.json';
import './App.css';

class App extends Component {
  state = {
    isLoggedIn: false,
    userValue: ' ',
    passwordValue: ' ',
    errorMessage: ' '
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
  loginMe = () => {
    let authorised;
    let errorMessage;
    data.map(item => {
      if (
        item.user === this.state.userValue &&
        item.password === this.state.passwordValue
      ) {
        authorised = true;
      } else {
        errorMessage = 'invalid user name and password';
      
      }
      console.log(authorised);
      return authorised;
    });
    this.setState({ isLoggedIn: authorised,
      errorMessage : errorMessage
    
    
    });
  };
  render() {
    return (
      <div className="App">
        {this.state.isLoggedIn ? (
          <DashboardPage />
        ) : (
          <div>
            <form />
            <p className="errorMessage">{this.state.errorMessage}</p>
            <ul>
              <li>
                <lable>User Name:</lable>
                <input type="text" onChange={this.handleUserChange} />
              </li>
              <p />
              <li>
                <lable>Password:</lable>
                <input type="password" onChange={this.handlePasswordChange} />
              </li>
            </ul>

            <LoginPage loginMe={this.loginMe} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
