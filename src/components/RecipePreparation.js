import React, { Component } from 'react';
import RecipeWelcomePage from './RecipeWelcomePage.js';
import item1 from '../data/chickPeaSaladSlides.json';
import item2 from '../data/tabboulehSlides.json';
import item3 from '../data/potatoRostisSlides.json';

import data from '../data/recipePreparation.json';
import { Col, Row, CardImg } from 'reactstrap';

class RecipePreparation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeSelected: false
    };
  }

  render() {
   
    const filteredValue = data.filter(item => item.id);

    return this.state.recipeSelected === true ? (
      <RecipeWelcomePage slides={this.state.items} setStepTo3={this.props.setStepTo3} />
    ) : (
      <div>
        <Row className >
        <Col sm={{ size: 'auto', offset: 1 }}>
            <CardImg top width="100%" src={filteredValue[0].url} />
            <button
              onClick={() =>
                this.setState({
                  recipeSelected: true,
                  items: item1,
                })
              }
            >
              {filteredValue[0].title}
            </button>
          </Col>

          <Col sm={{ size: 'auto', offset: 1 }}>
            <CardImg top width="100%" src={filteredValue[1].url} />
            <button
              onClick={() =>
                this.setState({
                  recipeSelected: true,
                  items: item2,
                })
              }
            >
              {filteredValue[1].title}
            </button>
          </Col>

          <Col sm={{ size: 'auto', offset: 1 }}>
            <CardImg top width="100%" src={filteredValue[2].url} />
            <button
              onClick={() =>
                this.setState({
                  recipeSelected: true,
                  items: item3,
                })
              }
            >
              {filteredValue[2].title}
            </button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default RecipePreparation;

// <Link to="recipe">{filteredValue[0].title}</Link>
