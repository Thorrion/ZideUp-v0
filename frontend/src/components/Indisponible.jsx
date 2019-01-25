import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Logo from './pictures/logoZideUp.png'

const styles = theme => ({
  root: {
    background: "linear-gradient(to top right, rgb(14, 98, 177), rgb(3, 156, 224))",
    height: "100vh"
  },
  title: {
    color: "white",
    fontSize: "3vw",
    textAlign: "center",
    marginTop: "2vw",
    marginBottom: "2vw",
  },
  logo: {
    width: "20vw",
    marginLeft: "40vw",
    marginBottom: "2vw"
  },
  catchPhrase: {
    color: "white",
    fontSize: "2vw",
    textAlign: "center"
  },
  button: {
    width: "90vw",
    marginLeft: "5vw",
    backgroundColor: "white",
    border: "none",
    height: "15vw",
    borderRadius: "15px",
    color: '#039ce0',
    fontSize: "6vw",
    fontWeight: "bold"
  }
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
        <Grid container className={classes.root}>

          <Grid item xs={12}>
              <p className={classes.title}>Bienvenue</p>
          </Grid>

          <Grid item xs={12}>
              <img src={Logo} alt="Logo ZideUp" className={classes.logo}/>
          </Grid>

          <Grid item xs={12}>
              <p className={classes.catchPhrase}>Laissez vos idées s'élever</p>
          </Grid>

          <Grid item xs={12}>
              <p className={classes.catchPhrase}>ZideUp est uniquement disponible sur mobile, <br/> la version web arrivera prochainement !</p>
          </Grid>

        </Grid>     
    )
  }
}

export default withStyles(styles)(Home)