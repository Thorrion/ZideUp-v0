import React, { Component } from 'react'
import {Switch, Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Page2 from '../pages/Page2';
import Home from '../components/Home/Home';
import Dashboard from '../pages/Dashboard';
import DashboardNew from '../pages/DashboardNew';

class AppRouter extends Component {
  render() {
    return (
      <Switch>
        {/* <Route exact path="/" component={Profile}/> */}
        <Route exact path="/" component={Home}/>
        <Route exact path="/2" component={Page2}/>
        <Route exact path="/3" component={Dashboard}/>
        <Route exact path="/4" component={DashboardNew}/>

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