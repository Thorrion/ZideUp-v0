import React, { Component } from 'react';
import Router from './routes/PublicRouter'

class App extends Component {
  
  componentDidUpdate() {
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
