
import React, { Component } from 'react';
import data from '../data/tableSetting.json';
import TableSettingPagination from './TableSettingPagination.js';
import Next from './Next.js';
import Previous from './Previous.js';
class TableSetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      fadeIn: true,
      appear: false,
      visitToStep: undefined,
    };
  }
  setCurrentStep = index => {
    this.setState({
      visitToStep: index,
      appear: !this.state.appear,
      fadeIn: this.state.fadeIn,
    });
  };

  handleNextClick = index => {
    let currentIndex = index < data.length ? index + 1 : (index = data.length);
    this.setState({
      currentStep: currentIndex,
      visitToStep: undefined,
    });
  };

  handlePreviousClick = index => {
    let currentIndex = index > 1 ? index - 1 : (index = 1);
    this.setState({
      currentStep: currentIndex,
      visitToStep: undefined,
    });
  };
  render() {
    const filteredItem = data.filter(
      item => item.id === (this.state.visitToStep || this.state.currentStep)
    );
    return (
      <div>
        <h2>Welcome to Table setup</h2>
        <TableSettingPagination
          setCurrentStep={this.setCurrentStep}
          currentStep={this.state.currentStep}
          visitToStep={this.visitToStep}
        />
        <div className="middle">
          <Previous
            currentStep={this.state.currentStep}
            handlePreviousClick={this.handlePreviousClick}
          />

          <div className="image-container">
            <img
              className="picture"
              src={filteredItem[0].url}
              alt={filteredItem[0].title}
            />
          </div>

          <Next
            handleNextClick={this.handleNextClick}
            currentStep={this.state.currentStep}
          />
        </div>
        <h1>{filteredItem[0].title}</h1>
      </div>
    );
  }
}

export default TableSetup;
