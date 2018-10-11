import React, { Component } from 'react';
import data from '../data/tableSetting.json';
import TableSettingPagination from './TableSettingPagination.js';
class TableSetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
    };
  }
  setCurrentStep = index => {
    console.log(index);
    //let n = this.state.currentStep;
    this.setState({
      currentStep: index,
    });
  };

  render() {
    console.log(data);
    const filteredItem = data.filter(
      item => item.id === this.state.currentStep
    );
    console.log(filteredItem);
    return (
      <div>
        <h2>Welcome to Table setup</h2>
        <TableSettingPagination
          currentStep={this.state.currentStep}
          setCurrentStep={this.setCurrentStep}
        />

        <div>
          <img src={filteredItem[0].url} alt={filteredItem[0].title} />
          <h1>{filteredItem[0].title}</h1>
        </div>
      </div>
    );
  }
}

export default TableSetup;
