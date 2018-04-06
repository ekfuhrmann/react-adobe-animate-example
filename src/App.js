import React, { Component } from 'react';
import AnimateCC from 'react-adobe-animate';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AnimateCC animationName="approachOne" />
      </div>
    );
  }
}

export default App;
