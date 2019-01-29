import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Badge from '@material-ui/core/Badge';
import Challenge from './pictures/launch.png'
import Idea from './pictures/idea.png'
import Warning from './pictures/warning-sign.png'
import Profil from './pictures/profile.png'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

const styles = {
  root: {
    width: "100vw",
    position: "fixed",
    bottom: 0,
    zIndex: 300
  },
  margin: {
    left: "20vw",
    position: "absolute",
    bottom: "2.5em"
  },
  margin1: {
    left: "45vw",
    position: "absolute",
    bottom: "2.5em"
  },
  margin2: {
    left: "70vw",
    position: "absolute",
    bottom: "2.5em"
  },
  margin3: {
    left: "95vw",
    position: "absolute",
    bottom: "2.5em"
  },
};

class BottomNavBar extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <BottomNavigation className={classes.root}>
      {this.props.challenges && this.props.challenges.list.length !== 0 &&
        <Badge className={classes.margin} badgeContent={this.props.challenges.list.length} color="secondary"></Badge>
      }
      <NavLink to="/4">
        <BottomNavigationAction label="Défis" icon={<img src={Challenge} alt="Defis" style={{width: "8vw", margin: "0 5.5vw"}}/>} />
      </NavLink>

      {this.props.ideas && this.props.ideas.list.length !== 0 &&
        <Badge className={classes.margin1} badgeContent={this.props.ideas.list.length} color="secondary"></Badge>
      }
        <BottomNavigationAction label="Idées" icon={<img src={Idea} alt="Defis" style={{width: "8vw"}}/>} />

      {this.props.problems && this.props.problems.list.length !== 0 &&
        <Badge className={classes.margin2} badgeContent={this.props.problems.list.length} color="secondary"></Badge>
      }
        <BottomNavigationAction label="Problèmes" icon={<img src={Warning} alt="Defis" style={{width: "8vw"}}/>} />

      {this.props.profil && this.props.profil.list.length !== 0 &&
        <Badge className={classes.margin3} badgeContent={this.props.profil.list.length} color="secondary"></Badge>
      }
        <BottomNavigationAction label="Profil" icon={<img src={Profil} alt="Defis" style={{width: "8vw"}}/>} />

      </BottomNavigation>
    );
  }
}

BottomNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  ...state
})


export default connect(mapStateToProps)(withStyles(styles)(BottomNavBar))