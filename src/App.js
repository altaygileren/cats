import React, { Component } from 'react';
import './App.css';
import { Row, Col } from 'react-bootstrap';

class App extends Component {

  constructor() {
    super();
    this.state = {
      images: [],
      selectedCategory: {}
    }
  }

  componentDidMount = () => {
    this.randomize();
  }

  randomize = () => {
    let arr = [];
    for (let i = 0; i < 9; i++) {
      let word = Math.floor((Math.random() * 2)) === 1 ? 'cats' : 'animals';
      arr = arr.concat(word);
    }
    if (arr.includes('cats') && arr.includes('animals')) {
      this.setState({ images: arr })
    } else {
      return this.randomize();
    }
  }

  clickedImage = (i) => {
    let newArr = [...this.state.images]
    if (this.state.images[i] === 'cats') {
      newArr[i] = 'animals';
    } else {
      newArr[i] = 'cats';
    }
    this.setState({ images: newArr })
  }

  submitVerification = () => {
    if (this.state.images.includes('cats')) {
      alert('theres stillcats')
      this.randomize();
    } else {
      alert('no cats')
      this.randomize();
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          Please remove all cats
        </div>
        <Row>
          {
            this.state.images.map((selection, i) => (
              <Col lg={4} key={i}>
                <img alt={selection} onClick={() => this.clickedImage(i)} name={selection} src={`http://lorempixel.com/200/200/${selection}`} />
              </Col>
            ))
          }
        </Row>
        <div>
          <button onClick={() => this.submitVerification()}>Submit</button>
        </div>
      </div>
    )
  }
}

export default App;
