import React, { Component } from 'react';
import Router from './routes/PublicRouter'
import './App.css';

class App extends Component {
  
  componentDidUpdate(prevProps, prevState) {
    window.scrollTo(0,0)
  }

  render() {
    return (
      <div>
        <Router/>
      </div>
    );
  }
}

export default App;
