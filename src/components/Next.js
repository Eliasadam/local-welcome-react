import React from 'react'
const Next =(props)=>{
    return(
        <div className="next-container">
         <button className="next-button" onClick={()=>props.handleNextClick(props.currentStep)}>Next</button>
        </div>
    )
}
export default Next