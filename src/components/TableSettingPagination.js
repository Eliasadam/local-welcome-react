import {Button} from 'reactstrap';
import React from 'react';
import data from '../data/tableSetting.json';
const activeAndCompletedClasses = (id, currentStep) => {
  if (id === currentStep) {
    return 'active-class info';
  } else if (id < currentStep) {
    return 'completed-class info';
  }
};
const TableSettingPagination = props => {
  return data.map(item => (

      <Button
        onClick={() => props.setCurrentStep(item.id)}
        value={item.id}
        className={activeAndCompletedClasses(item.id, props.currentStep)}
        disabled={item.id > props.currentStep}
      >
        {item.id}
      </Button>
   
  ));
};
export default TableSettingPagination;
