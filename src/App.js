import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from './node_modules/react-carousel';

const fillArray = (value, len) => {
  if (len === 0) return [];
  let a = [value];
  while (a.length * 2 <= len) a = a.concat(a);
  if (a.length < len) a = a.concat(a.slice(0, len - a.length));
  return a;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Carousel slidesToShow={1}>
          {[...fillArray('https://unsplash.it/1200/310?random', 10)].map(i => <img key={i} src={i} alt={i} />)}
        </Carousel>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
