import React, { Component } from 'react'
import {Switch, Route, withRouter} from 'react-router-dom';
import Profile from '../components/Profile';
import { connect } from 'react-redux';
import Page2 from '../pages/Page2';
import Home from '../components/Home/Home';
import Page3 from '../pages/Page3';

class AppRouter extends Component {
  render() {
    return (
      <Switch>
        {/* <Route exact path="/" component={Profile}/> */}
        <Route exact path="/" component={Home}/>
        <Route exact path="/3" component={Page3}/>

      </Switch>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  
})

const mapStateToProps = state => ({
  ...state
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppRouter));