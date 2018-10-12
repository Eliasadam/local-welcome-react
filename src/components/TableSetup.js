import React, { Component } from 'react';
//import { Fade } from 'reactstrap';
import data from '../data/tableSetting.json';
<<<<<<< HEAD
import TableSettingPagination from './TableSettingPagination.js'
import NextPreviousButtons from './NextPreviousButtons.js'
import Previous from './Previous.js';
class  TableSetup extends Component {
  constructor(props){
    super(props)
    this.state={
      currentStep: 1,
      fadeIn: true ,
      appear: false
    }
=======
import TableSettingPagination from './TableSettingPagination.js';
class TableSetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
    };
>>>>>>> raj/add_reactstrap_support
  }
  setCurrentStep = index => {
    console.log(index);
    //let n = this.state.currentStep;
<<<<<<< HEAD
     this.setState({
        currentStep:index,
        appear:!this.state.appear,
        fadeIn:this.state.fadeIn,
  
    

       
     })
   }

   handleNextClick=(index)=>{
    let currentIndex = index<data.length?(index+1):(index=data.length)
    console.log(currentIndex)
     this.setState({
       currentStep : currentIndex,
       
     })
   }

   handlePreviousClick=(index)=>{
    let currentIndex = index>1?(index-1):(index=1)
    //console.log(currentIndex)
    this.setState({
      currentStep : currentIndex,
   
    })
  }
=======
    this.setState({
      currentStep: index,
    });
  };

>>>>>>> raj/add_reactstrap_support
  render() {
    console.log(data);
    const filteredItem = data.filter(
      item => item.id === this.state.currentStep
    );
    console.log(filteredItem);
    return (
      <div>
        <h2>Welcome to Table setup</h2>
<<<<<<< HEAD
        <div class="button-container">
            <TableSettingPagination setCurrentStep={this.setCurrentStep}/>  
        </div>
        <div className="middle">
          <NextPreviousButtons handleNextClick={this.handleNextClick} currentStep={this.state.currentStep}/>
          
              <div className='image-container'>
                 <img className="picture" src={filteredItem[0].url} alt={filteredItem[0].title}/>
                 
              </div>

           
            <Previous currentStep={this.state.currentStep} handlePreviousClick={this.handlePreviousClick}/>
           
        </div>
        <h1>{filteredItem[0].title}</h1>
       </div>
=======
        <TableSettingPagination
          currentStep={this.state.currentStep}
          setCurrentStep={this.setCurrentStep}
        />

        <div>
          <img src={filteredItem[0].url} alt={filteredItem[0].title} />
          <h1>{filteredItem[0].title}</h1>
        </div>
      </div>
>>>>>>> raj/add_reactstrap_support
    );
  }
}

export default TableSetup;
