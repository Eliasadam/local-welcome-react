import React, { Component } from 'react';
import DashboardPage from './components/pages/DashboardPage';
import LoginPage from './components/pages/Loginpage';
import './App.css';

class App extends Component {
  state = {
    isLoggedIn: false,
  };
  loginMe = () => {
    this.setState({ isLoggedIn: true });
  };
  render() {
    return (
      <div className="App">
        {this.state.isLoggedIn ? (
          <DashboardPage />
        ) : (
          <LoginPage loginMe={this.loginMe} />
        )}
      </div>
    );
  }
}

export default App;
