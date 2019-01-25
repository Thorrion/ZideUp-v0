import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Logo from './pictures/Zideup_Z.png'
import Boss from './pictures/boss.png'
import User from './pictures/user.png'

const styles = theme => ({
  container: {
    background: "linear-gradient(to top right, rgb(14, 98, 177), rgb(3, 156, 224))",
    height: "100vh",
  },
  background: {
    width: "100vw",
    position: "absolute",
    marginLeft: "0vw",
    opacity: 0.5,
    top: "20%",
    zIndex: 1,
    transform: "rotate(-15deg)"
  },
  texte: {
    textAlign: "center",
    width: "100vw",
    fontSize: "5vw",
    margin: "auto",
    fontWeight: "bold",
    color: "black",
  },
  bloc: {
    display: "flex",
    width: "50vw",
    height: "30vh",
    zIndex: 100,
    paddingTop: "10vh"
  },
  bloc1: {
    display: "flex",
    width: "50vw",
    marginLeft: "50vw",
    height: "30vh",
    marginTop: "25vh",
    zIndex: 100
  },
  image: {
    width: "40vw",
    margin: 'auto',
    paddingBottom: "10vh",
    zIndex: 100
  },
  image1: {
    width: "40vw",
    margin: 'auto',
    paddingTop: "10vh",
    zIndex: 100
  }
})

class Login extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.container}>
        <img src={Logo} alt="Logo Zideup" className={classes.background}/>
        <NavLink to="/4">
          <Grid container className={classes.bloc}>
            <p className={classes.texte}>Directeurs</p>
            <div className={classes.image}>
              <img src={Boss} alt="Director" style={{width: "40vw", color: "black"}}/>
            </div>
          </Grid>
        </NavLink>

        <NavLink to="/5">
          <Grid container className={classes.bloc1}>
            <div className={classes.image1}>
              <img src={User} alt="Director" style={{width: "40vw", color: "black"}}/>
            </div>
            <p className={classes.texte}>Equipiers</p>
          </Grid>
        </NavLink>
      </Grid>
    )
  }
}

export default withStyles(styles)(Login)
