import React, { Component } from 'react';
import Home from './components/Home';

import Router from './routes'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      {/* <Router/> */}
      <Home />
      </div>
    );
  }
}

export default App;
