import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Logo from './Zideup_Z.png'

const styles = theme => ({
  container: {
    background: "linear-gradient(to top right, rgb(14, 98, 177), rgb(3, 156, 224))",
    height: "100vh",
  },
  background: {
    width: "80vw",
    position: "absolute",
    marginLeft: "10vw",
    opacity: 0.5,
    top: "27%",
    zIndex: 1
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
    width: "100vw",
    justifyContent: "center",
    height: "30vh",
    zIndex: 100,
    paddingTop: "5vh"
  },
  bloc1: {
    display: "flex",
    width: "100vw",
    justifyContent: "center",
    height: "30vh",
    marginTop: "30vh",
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
        <NavLink to="/3">
          <Grid container className={classes.bloc}>
            <p className={classes.texte}>Directeur</p>
            <div className={classes.image}>
              <i style={{fontSize: "40vw", color: "black"}} className="fas fa-user-circle"></i>
            </div>
          </Grid>
        </NavLink>

        <NavLink to="/3">
          <Grid container className={classes.bloc1}>
            <div className={classes.image1}>
            <i style={{fontSize: "40vw", color: "black"}} className="fas fa-user-circle"></i>
            </div>
            <p className={classes.texte}>Utilisateur</p>
          </Grid>
        </NavLink>
      </Grid>
    )
  }
}

export default withStyles(styles)(Login)
