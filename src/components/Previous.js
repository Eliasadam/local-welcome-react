import React from 'react'
import data from '../data/tableSetting.json';
import {Button} from 'reactstrap';
const Previous =(props)=>{
    return(
        <div className="previous-container">
           <Button className="previous-button primary" onClick={()=>props.handlePreviousClick(props.currentStep)}
           disabled={props.currentStep <= 1}
           >Previous</Button>
        </div>
    )
}
export default Previous