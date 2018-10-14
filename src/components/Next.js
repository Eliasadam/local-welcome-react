import React from 'react';
import data from '../data/tableSetting.json';
import {Button} from 'reactstrap';

const Next =(props)=>{
    return(
        <div className="next-container">
         <Button className="next-button primary" onClick={()=>props.handleNextClick(props.currentStep)}
          disabled={props.currentStep >= data.length}
         >Next</Button>
        </div>
    )
}
export default Next