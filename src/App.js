import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from './node_modules/react-carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Carousel>
          <h1>1</h1>
          <h1>2</h1>
          <h1>3</h1>
          <h1>4</h1>
        </Carousel>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
