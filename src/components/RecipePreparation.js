import React, { Component } from 'react';
import PotatoRostisSlides from './PotatoRostisSlides';
import data from '../data/recipePreparation.json';
import { Link } from 'react-router-dom';
import { CardLink, Col, Row, CardImg } from 'reactstrap';
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
      <PotatoRostisSlides/>
    ) : (
      <div>
        <Row>
          <Col sm="4">
            <CardImg top width="100%" src={filteredValue[0].url} />
            <button onClick={()=>this.setState({recipeSelected:true})}>{filteredValue[0].title}</button>
          </Col>
          <Col sm="4">
            <CardImg top width="100%" src={filteredValue[1].url} />
          </Col>
          <Link to="recipe">{filteredValue[1].title}</Link>
          <Col sm="4">
            <CardImg top width="100%" src={filteredValue[2].url} />
          </Col>
          <CardLink href="#">{filteredValue[2].title}</CardLink>
        </Row>
      </div>
    );
  }
}

export default RecipePreparation;
