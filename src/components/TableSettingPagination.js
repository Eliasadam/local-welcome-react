import {Button} from 'reactstrap';
import React from 'react';
import data from '../data/tableSetting.json';

const TableSettingPagination = (props)=>{
    
      return data.map((item,index) =>
          
              <Button className="pagination-button" color="info" onClick={()=>props.setCurrentStep(index+1)} value={item.id}>{item.id}</Button>
          
        
       )
    
}
export default TableSettingPagination