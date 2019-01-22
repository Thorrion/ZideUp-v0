import React, { Component } from 'react'
import { Progress } from 'reactstrap'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    paddingTop: "4em",
    paddingBottom: "4em"
  },
  title: {
    backgroundColor: "#e8e8e8",
    margin: "0 -6vw",
    padding: "2vw 5vw"
  },
  challenge: {
    padding: "5vw 0",
    marginLeft: "-3vw"
  },
  side: {
    textAlign: "right",
    margin: "auto",
    color: "gray",
    marginRight: "-3vw",
    fontSize: "3.5vw"
  },
  progress: {
    height: "3px"
  },
  hr: {
    width: "100vw !important",
    margin : "0 -6vw"
  },
});

class All extends Component {
  render() {
    const { classes } = this.props;
    return (
        <div className={classes.root}>

{/* BROUILLON */}

            <p className={classes.title}>Brouillons</p>

          <Grid container>

            <Grid item xs={9} className={classes.challenge}>
              <p style={{margin: 0}}>Sécurité : Réduire les risques d'accident</p>
            </Grid>
            <Grid item xs={3} className={classes.side}>
                <i className="fas fa-arrow-right" style={{color: "#039ce0", fontSize: "5vw"}}></i>
            </Grid>
          
            <hr className={classes.hr}/>

          </Grid>

{/* NOUVEAU */}

            <p className={classes.title}>Nouveaux</p>

          <Grid container>

            <Grid item xs={9} className={classes.challenge}>
              <p style={{margin: 0}}>Sécurité : Réduire les risques d'accident</p>
            </Grid>
            <Grid item xs={3} className={classes.side}>
                <i className="fas fa-arrow-right" style={{color: "#039ce0", fontSize: "5vw"}}></i>
            </Grid>
          
            <hr className={classes.hr}/>

          </Grid>

{/* EN COURS */}

          <p className={classes.title}>En cours</p>

          <Grid container>

            <Grid item xs={9} className={classes.challenge}>
              <p style={{margin: 0}}>Qualité : Diminuer les défauts de 30%</p>
              <Progress value="15" className={classes.progress} />
            </Grid>
            <Grid item xs={3} className={classes.side}>
              <p style={{margin: 0}}>
                <i className="fas fa-thumbs-up"></i> 
                44 
                <i className="fas fa-lightbulb" style={{marginLeft: "1vw"}}></i>
                12
                <i className="fas fa-arrow-right" style={{color: "#039ce0", fontSize: "5vw", marginLeft: "1vw"}}></i>
              </p>
            </Grid>

          <hr className={classes.hr}/>

          </Grid>

{/* TERMINES */}

            <p className={classes.title}>Terminés</p>

            <Grid container>

            <Grid item xs={9} className={classes.challenge}>
              <p style={{margin: 0}}>R&D : Proposer 4 nouvelles fonctionnalités</p>
              <Progress value="100" color="success" className={classes.progress} />
            </Grid>

            <Grid item xs={3} className={classes.side}>
                <p style={{margin: 0}}>
                  <i className="fas fa-thumbs-up"></i> 
                  27
                  <i className="fas fa-lightbulb" style={{marginLeft: "1vw"}}></i>
                  19
                  <i className="fas fa-arrow-right" style={{color: "#039ce0", fontSize: "5vw", marginLeft: "1vw"}}></i>
                </p>
            </Grid>

            <hr className={classes.hr}/>

          </Grid>

        </div>

    )
  }
}

export default withStyles(styles)(All)