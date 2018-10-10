import React, { Component } from 'react';
import TableSetup from '../TableSetup';
import RecipePreparation from '../RecipePreparation';
import CleaningUp from '../CleaningUp';
export default class DashboardPage extends Component {
  state = {
    mainStep: 0,
  };
  setStepTo1 = () => this.setState({ mainStep: 1 });
  setStepTo2 = () => this.setState({ mainStep: 2 });
  setStepTo3 = () => this.setState({ mainStep: 3 });
  currentComponent = step => {
    switch (this.state.mainStep) {
      case 1:
        return <TableSetup />;
      case 2:
        return <RecipePreparation />;
      case 3:
        return <CleaningUp />;
      default:
        return <h1> We are ready to get started ... Say something </h1>;
    }
  };
  render() {
    return (
      <div>
        <h1>Welcome to Cook and Eat Ritual!</h1>
        {this.currentComponent(this.state.mainStep)}
        <button onClick={this.setStepTo1}> Table setup startingn... </button>
        <button onClick={this.setStepTo2}>
          {' '}
          Recipe preparation startingn...{' '}
        </button>
        <button onClick={this.setStepTo3}> Cleaning up startingn...</button>
      </div>
    );
  }
}
