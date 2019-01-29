import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Background from './pictures/header.png'
import Alarme from './pictures/alarm.png'
import Badge from '@material-ui/core/Badge';
import More from './pictures/plus.png'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const styles = {
  container: { 
    display: 'flex',
    position: 'fixed',
    width: '100%',
    marginBottom: '15vh',
    zIndex: '2000',
  },
  background: {
    width: "102vw",
    position: "absolute",
    marginLeft: "-1vw",
    zIndex: 1,
    background: "#f5f5f5",
    height: "7em"
  },
  title: {
    color: 'white',
    textAlign: 'center',
    width: '100vw',
    fontSize: '5vw',
    fontWeight: 'bold',
    marginTop: '2.5em',
    zIndex: 5
  },
  alarm: {
    height: "12vw",
    zIndex: 5,
    position: "absolute",
    left: "5vw",
    top: "5vw"
  },
  margin: {
    zIndex:6,
    top: "6vw",
    left: "15vw"
  },
  more: {
    zIndex: 6,
    width: "12vw",
    height: "12vw",
    position:"absolute",
    right: "5vw",
    top: "5vw",
    background: "orange",
    borderRadius: "50%",
    padding: "3vw"
  }
  
};

class NavBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
      {this.props.notif && this.props.challenges.list.length !== 0 &&
        <div>
          <Badge className={classes.margin} badgeContent={this.props.challenges.list.length} color="secondary">
          </Badge>
          <img src={Alarme} alt="Cloche" className={classes.alarm}/>
        </div>
      }
        <img src={Background} alt="Background" className={classes.background}/>
        <h2 className={classes.title}>{this.props.title}</h2>
      {this.props.addChallenge && 
        <NavLink to="/6">
          <img src={More} alt="Add Challenge" className={classes.more}/>
        </NavLink>
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
})

export default connect(mapStateToProps)(withStyles(styles)(NavBar))