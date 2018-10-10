import React from 'react';
import data from '../data/tableSetting.json';
const TableSettingPagination = (props)=>{
    
      return data.map((item,index) =>
          <div>
              <button onClick={()=>props.setCurrentStep(index+1)} value={item.id}>{item.id}</button>
          </div>
        
       )
    
}
export default TableSettingPagination