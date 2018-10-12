import React from 'react'
const Previous =(props)=>{
    return(
        <div className="previous-container">
           <button className="previous-button" onClick={()=>props.handlePreviousClick(props.currentStep)}>Previous</button>
        </div>
    )
}
export default Previous