import {Button} from 'reactstrap';
import React from 'react';
import data from '../data/tableSetting.json';
const activeAndCompletedClasses = (id, currentStep) => {
  if (id === currentStep) {
    return 'active-class';
  } else if (id < currentStep) {
    return 'completed-class';
  }
};
const TableSettingPagination = props => {
  return data.map(item => (
    <div>
      <button
        onClick={() => props.setCurrentStep(item.id)}
        value={item.id}
        className={activeAndCompletedClasses(item.id, props.currentStep)}
        // disabled={item.id > props.currentStep}
      >
        {item.id}
      </button>
    </div>
  ));
};
export default TableSettingPagination;
