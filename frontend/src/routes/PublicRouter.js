import React, { Component } from 'react'
import {Switch, Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Page2 from '../pages/Page2';
import Home from '../components/Home';
import DashboardInProgress from '../components/DashboardInProgress';
import CreateDefi from '../components/CreateDefi/CreateDefi';

class AppRouter extends Component {
  render() {
    return (
      <Switch>
        {/* <Route exact path="/" component={Profile}/> */}
        {/* <Route exact path="/2" component={Page2}/>
        <Route exact path="/" component={Home}/> */}
        <Route exact path="/" component={CreateDefi}/>

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