import React, { Component } from 'react';
import data from '../data/tableSetting.json';
import TableSettingPagination from './TableSettingPagination.js'
import NextPreviousButtons from './NextPreviousButtons.js'
class  TableSetup extends Component {
  constructor(props){
    super(props)
    this.state={
      currentStep: 1
    }
  }
   setCurrentStep=(index)=>{
     console.log(index);
    //let n = this.state.currentStep;
     this.setState({
        currentStep:index
 
     })
   }

   handleNextClick=(index)=>{
    let currentIndex = index<data.length?(index+1):(index=1)
     this.setState({
       currentStep : currentIndex
     })
   }

   handlePreviousClick=(index)=>{
    let currentIndex = index>1?(index-1):(index=1)
    console.log(currentIndex)
    this.setState({
      currentStep : currentIndex
    })
  }
  render() {
    console.log(data);
    const filteredItem = data.filter((item)=> item.id === this.state.currentStep)
    console.log(filteredItem);
    return (
       <div>
        <h2>Welcome to Table setup</h2>
        <TableSettingPagination setCurrentStep={this.setCurrentStep}/>  
        <NextPreviousButtons handleNextClick={this.handleNextClick} currentStep={this.state.currentStep} handlePreviousClick={this.handlePreviousClick}/>
              <div>
                 <img src={filteredItem[0].url} alt={filteredItem[0].title}/>
                 <h1>{filteredItem[0].title}</h1>
              </div>
              
       </div>
    );
  }
}
 

export default TableSetup;
