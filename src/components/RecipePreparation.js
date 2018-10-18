import React, { Component } from 'react';
import PotatoRostisWelcomePage from './PotatoRostisWelcomePage.js';
// import ChickPeaWelcomePage from './ChickPeaWelcomePage.js';
import data from '../data/recipePreparation.json';

import { Col, Row, CardImg } from 'reactstrap';
class RecipePreparation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeSelected: false,
    };
  }

  render() {
    const filteredValue = data.filter(item => item.id);

    return this.state.recipeSelected === true ? (
      <PotatoRostisWelcomePage/>
    
    ) : (
      <div>
        <Row>
          <Col sm="4">
            <CardImg top width="100%" src={filteredValue[0].url} />
            <button onClick={()=>this.setState({recipeSelected:true})}>{filteredValue[0].title}</button>
          </Col>
          
          <Col sm="4">
            <CardImg top width="100%" src={filteredValue[1].url} />
            <button onClick={()=>this.setState({recipeSelected:true})}>{filteredValue[1].title}</button>
          </Col>
          
          <Col sm="4">
            <CardImg top width="100%" src={filteredValue[2].url} />
            <button onClick={()=>this.setState({recipeSelected:true})}>{filteredValue[2].title}</button>
          </Col>
          
        </Row>
      </div>
    );
  }
}

export default RecipePreparation;

// <Link to="recipe">{filteredValue[0].title}</Link>
