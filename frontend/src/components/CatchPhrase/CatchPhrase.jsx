import React, { Component } from 'react'
import Ampoule from './picture/light-bulb.png'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom'

const styles = theme => ({
  root: {
    background: "linear-gradient(white, #e0f1ff)",
    height: "100vh",
    paddingTop: "4em"
  },
  window: {
    width: "90vw",
    height: "30vh",
    marginTop: "10vh",
    backgroundColor: "#039ce0",
    marginLeft: "5vw",
    borderRadius: "15px"
  },
  logo: {
    marginTop: "5vh",
    width: "30vw",
    marginLeft: "30vw",
    marginBottom: "10vw"
  },
  catchPhrase: {
    fontSize: "5.5vw",
    paddingTop: "3vh",
    textAlign: "center",
    background: "white",
    height: "25vh",
    alignContent: "center",
    borderRadius: "0 0 15px 15px"
  },
  button: {
    marginTop: "20vh",
    width: "90vw",
    marginLeft: "5vw",
    backgroundColor: "#039ce0",
    border: "none",
    height: "15vw",
    borderRadius: "15px",
    color: 'white',
    fontSize: "6vw",
    fontWeight: "bold"
  }
});

class CatchPhrase extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>

        <Grid className={classes.window}>

          <Grid>
            <img src={Ampoule} alt="Ampoule" className={classes.logo}/>
          </Grid>

          <Grid className={classes.catchPhrase}>
            <p>Zideup vous permet de lancer des défis opérationnels et d'interroger vos équipes sur leurs difficultés ou leurs idées de progrès concernés.</p>
          </Grid>

        </Grid>

        <NavLink to="/5">
          <button className={classes.button}>Continuer</button>
        </NavLink>

      </Grid>
    )
  }
}

export default withStyles(styles)(CatchPhrase)