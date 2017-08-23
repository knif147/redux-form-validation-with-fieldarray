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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => <h1 key={i}>{i}</h1>)}
        </Carousel>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
