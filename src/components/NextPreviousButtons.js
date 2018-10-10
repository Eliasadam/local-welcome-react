import React from 'react'
const NextPreviousButtons =(props)=>{
    return(
        <div>
           <button onClick={()=>props.handlePreviousClick(props.currentStep)}>Previous</button>
           <button onClick={()=>props.handleNextClick(props.currentStep)}>Next</button>
        </div>
    )
}
export default NextPreviousButtons