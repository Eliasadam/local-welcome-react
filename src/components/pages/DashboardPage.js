import React, { Component } from 'react';
import { Button } from 'reactstrap';
import TableSetup from '../TableSetup';
import RecipePreparation from '../RecipePreparation';
//import RecipeSlides from '../RecipeSlides';
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
        return <RecipePreparation/>;
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
        <Button
          color="primary"
          onClick={this.setStepTo1}
          className={this.state.mainStep === 1 ? 'active-class' : null}
        >
          {' '}
          Table setup startingn...{' '}
        </Button>
        <Button
          onClick={this.setStepTo2}
          className={this.state.mainStep === 2 ? 'active-class' : null}
        >
          {' '}
          Recipe preparation startingn...{' '}
        </Button>
        <Button
          onClick={this.setStepTo3}
          className={this.state.mainStep === 3 ? 'active-class' : null}
        >
          Cleaning up startingn...
        </Button>
      </div>
    );
  }
}
