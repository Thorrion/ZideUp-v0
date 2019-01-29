import React, { Component } from 'react'
import {Switch, Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Page2 from '../pages/Page2';
import Media from 'react-media'
import Home from '../components/Home';
import CreateDefi from '../pages/director/CreateChallenge';
import Challenge from '../pages/Challenge';
import ChallengeVote from '../pages/ChallengeVote';
import ChallengeAllIdeas from '../pages/ChallengeAllIdeas';
import ChallengeThemeIdeas from '../pages/ChallengeThemeIdeas';
import CreateIdea from '../pages/CreateIdea';
import Idea from '../pages/Idea';
import DashboardBoss from '../pages/director/Dashboard';
import DashboardEmployee from '../pages/user/Dashboard';
import Indisponible from '../components/Indisponible'
import Login from '../components/Login'

import ChallengeVote1 from '../pages/fake/ChallengeVote1'
import Challenge1 from '../pages/fake/Challenge1'
import ChallengeThemeIdeas1 from '../pages/fake/ChallengeThemeIdeas1'
import ChallengeAllIdeas1 from '../pages/fake/ChallengeAllIdeas1'
import Idea1 from '../pages/fake/Idea1'

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
              <Route exact path="/6" component={CreateDefi}/>
              <Route exact path="/6.5/:id" component={ChallengeVote}/>
              <Route exact path="/7/:id" component={Challenge}/>
              <Route exact path="/8/:id/:categoryid" component={ChallengeAllIdeas}/>
              <Route exact path="/9/:id/:categoryid" component={ChallengeThemeIdeas}/>
              <Route exact path="/10/:id" component={CreateIdea}/>
              <Route exact path="/11/:id/:categoryid/:ideaid" component={Idea}/>

              {/* Fake */}

              <Route exact path="/20" component={ChallengeVote1}/>
              <Route exact path="/21" component={Challenge1}/>
              <Route exact path="/22" component={ChallengeThemeIdeas1}/>
              <Route exact path="/23" component={ChallengeAllIdeas1}/>
              <Route exact path="/24" component={Idea1}/>

            </Switch>
            ) : (
              <Indisponible/>
            )
        }
      </Media>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default withRouter(connect(mapStateToProps)(AppRouter));