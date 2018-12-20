import React, { Component } from 'react'
import {Switch, Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Page2 from '../pages/Page2';
import Home from '../components//Home/Home';
import PageCreateDefi from '../pages/PageCreateDefi';
import PageRecapTheme from '../pages/PageRecapTheme';
import PageRecapVote from '../pages/PageRecapVote';
import PageVote from '../pages/PageVote';
import Page3 from '../pages/Page3';

class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/2" component={Page2}/>
        <Route exact path="/3" component={Page3}/>
        <Route exact path="/4" component={PageCreateDefi}/>
        <Route exact path="/5" component={PageVote}/>
        <Route exact path="/6" component={PageRecapVote}/>
        <Route exact path="/7" component={PageRecapTheme}/>

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