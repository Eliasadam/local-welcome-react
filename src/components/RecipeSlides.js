import React, { Component } from 'react';

import {
  Col,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

class RecipeSlides extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeIndex: 0,
      currentStep: 1,
      translateValue: 0,
      fadeIn: true,
      appear: false,
      modal: false };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.handleModal=this.handleModal.bind(this);

  }
  handleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.props.items.length
        ? this.props.items
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
    let Modal=nextIndex===this.props.items.length? this.handleModal(): null;
    return Modal;
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.props.items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  
  render() {
    const { activeIndex } = this.state;



  const slides = this.props.items.map(item => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
         
        >
        <div className="header">
        <h4>{item.caption}</h4>
        <h4>{item.altText}</h4>
        </div>

        </CarouselItem>
      );
    });

    return (
      <div>
        <style>
          {`.custom-tag {
                max-width: 100%;
                height: 530px;
                background: #8ac43f;
                
              },
             .header {
                color: white;
              }`}
        </style>
        <Col sm={{ size: 'auto', offset: 1 }}>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
          interval={false}
        >
          <CarouselIndicators
            items={this.props.items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
        <Modal isOpen={this.state.modal} handleModal={this.handleModal} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <h1> Thank you for leading the table. You have completed the task successfully</h1>
            <h1>Please go to the next next</h1>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.state.CleaningUpWelcomePage}>Do Something</Button>{' '}
          </ModalFooter>
        </Modal>
        </Col>
      </div>
    );
  }
}

export default RecipeSlides;
