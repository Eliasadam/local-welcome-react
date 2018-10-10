import React from 'react';
import data from '../data/tableSetting.json';
const TableSettingPagination = props => {
  return data.map(item => (
    <div>
      <button onClick={() => props.setCurrentStep(item.id)} value={item.id}>
        {item.id}
      </button>
    </div>
  ));
};
export default TableSettingPagination;
