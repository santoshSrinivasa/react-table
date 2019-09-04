import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import User from "./UserDetail";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'san'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <User/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
