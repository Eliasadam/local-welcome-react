import React, { Component } from 'react';
import TableSetup from '../TableSetup';
import RecipePreparation from '../RecipePreparation';
import CleanigUp from '../CleaningUp';
export default class DashboardPage extends Component {
  state = {
    mainStep: 0,
  };
  setSetpTo1 = () => this.setState({ mainStep: 1 });
  setSetpTo2 = () => this.setState({ mainStep: 2 });
  setSetpTo3 = () => this.setState({ mainStep: 3 });
  currentComponent = step => {
    switch (this.state.mainStep) {
      case 1:
        return <TableSetup />;
      case 2:
        return <RecipePreparation />;
      case 3:
        return <CleanigUp />;
      default:
        return <h1> We are ready to get started ... Say something </h1>;
    }
  };
  render() {
    return (
      <div>
        <h1>Welcome to Cook and Eat Ritual!</h1>
        {this.currentComponent(this.state.mainStep)}
        <button onClick={this.setSetpTo1}> Table setup startign... </button>
        <button onClick={this.setSetpTo2}>
          {' '}
          Recipe preparation startign...{' '}
        </button>
        <button onClick={this.setSetpTo3}> Cleanig up startign...</button>
      </div>
    );
  }
}
