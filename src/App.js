import React, { Component } from 'react';
import Carousel from 'reaction-carousel';
import logo from './logo.svg';
import './App.css';

const fillArray = (value, len) => {
  if (len === 0) return [];
  let a = [value];
  while (a.length * 2 <= len) a = a.concat(a);
  if (a.length < len) a = a.concat(a.slice(0, len - a.length));
  return a;
};

class App extends Component {

  state = {
    visible: false
  };

  render() {
    return (
      <div className="App">
        <h1>ad</h1>
        <div className="App-header">
          <img onClick={() => this.setState({ visible: !this.state.visible })} src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Carousel slidesToShow={1} transitionTime={1000}>
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
