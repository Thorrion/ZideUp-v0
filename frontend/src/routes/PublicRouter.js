import React, { Component } from 'react'
import {Switch, Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Page2 from '../pages/Page2';
import Media from 'react-media'
import Home from '../components//Home/Home';
import PageCreateDefi from '../pages/director/CreateChallenge';
import PageRecapTheme from '../pages/PageRecapTheme';
import PageRecapVote from '../pages/PageRecapVote';
import VisuChallenge from '../pages/VisuChallenge';
import DashboardBoss from '../pages/director/Dashboard';
import DashboardEmployee from '../pages/user/Dashboard';
import Indisponible from '../components/Indisponible'
import Login from '../components/Login/Login'

class AppRouter extends Component {
  render() {
    return (
      <Media query="(max-width: 425px)">
      {matches =>
        matches ? (
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/2" component={Page2}/>
            <Route exact path="/3" component={Login}/>
            <Route exact path="/4" component={DashboardBoss}/>
            <Route exact path="/5" component={DashboardEmployee}/>
            <Route exact path="/6" component={PageCreateDefi}/>
            <Route exact path="/7/:index" component={VisuChallenge}/>
            <Route exact path="/8/:index" component={PageRecapVote}/>
            <Route exact path="/9/:index" component={PageRecapTheme}/>
          </Switch>
          ) : (
            <Indisponible/>
          )
      }
    </Media>
      
    )
  }
}

const mapDispatchToProps = dispatch => ({
  
})

const mapStateToProps = state => ({
  ...state
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppRouter));