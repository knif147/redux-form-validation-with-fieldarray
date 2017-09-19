import React, { PureComponent } from 'react';
import Form from './components/Form';
import logo from './logo.svg';
import './App.css';

class App extends PureComponent {

  render() {
    return (
      <div className="App">
        <h1>redux-form-fieldarray-validation</h1>
        <div>
          <a href="https://github.com/alirezavalizade/redux-form-fieldarray-validation" target="_blank" rel="noopener noreferrer">
          view github
        </a>
        </div>
        <br />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <br />
        <br />
        <br />
        <Form onSubmit={v => console.log('values ===>', v)} />
        <br />
        <br />
        <br />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
