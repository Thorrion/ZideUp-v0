import React, { Component } from 'react'
import { Progress } from 'reactstrap'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import { compose } from 'recompose'

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
    console.log(this.props);
    return (
        <div className={classes.root}>

{/* NOUVEAU */}

            <p className={classes.title}>Nouveaux</p>

          <Grid container>

          {this.props.challenges.list &&
            this.props.challenges.list.map((challenge, index) => {
              return (
              <Grid container key={index}>
                <Grid item xs={9} className={classes.challenge}>
                  <p style={{margin: 0}}>{challenge.perimetre} : {challenge.nom}</p>
                </Grid>
                <Grid item xs={3} className={classes.side}>
                  <NavLink to={`/6/${index}`}>
                    <i className="fas fa-arrow-right" style={{color: "#039ce0", fontSize: "5vw"}}></i>
                  </NavLink>
                </Grid>
                <hr className={classes.hr}/>
              </Grid>
              )
            })
            }

            <Grid item xs={9} className={classes.challenge}>
              <p style={{margin: 0}}>Sécurité : Réduire les risques d'accident</p>
            </Grid>
            <Grid item xs={3} className={classes.side}>
                <i className="fas fa-arrow-right" style={{color: "#039ce0", fontSize: "5vw"}}></i>
            </Grid>
          
            <hr className={classes.hr}/>

            <Grid item xs={9} className={classes.challenge}>
              <p style={{margin: 0}}>Production : Améliorer les conditions de...</p>
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
              <p style={{margin: 0}}>Production : Digitaliser l'audit qualité</p>
              <Progress value="55" className={classes.progress} />
            </Grid>
            <Grid item xs={3} className={classes.side}>
                  <p style={{margin: 0}}>
                    <i className="fas fa-thumbs-up"></i> 
                    15 
                    <i className="fas fa-lightbulb" style={{marginLeft: "1vw"}}></i>
                    8 
                    <i className="fas fa-arrow-right" style={{color: "#039ce0", fontSize: "5vw", marginLeft: "1vw"}}></i>
                  </p>
            </Grid>

          
            <hr className={classes.hr}/>

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

            <Grid item xs={9} className={classes.challenge}>
              <p style={{margin: 0}}>R&D : Proposer 4 nouvelles fonctionnalités</p>
              <Progress value="80" className={classes.progress} />
            </Grid>
            <Grid item xs={3} className={classes.side}>
              <p style={{margin: 0}}>
                  <i className="fas fa-thumbs-up"></i> 
                  23
                  <i className="fas fa-lightbulb" style={{marginLeft: "1vw"}}></i>
                  15
                  <i className="fas fa-arrow-right" style={{color: "#039ce0", fontSize: "5vw", marginLeft: "1vw"}}></i>
                </p>
            </Grid>

            <hr className={classes.hr}/>

          </Grid>

{/* TERMINES */}

            <p className={classes.title}>Terminés</p>

            <Grid container>

            <Grid item xs={9} className={classes.challenge}>
              <p style={{margin: 0}}>Production : Digitaliser les processus</p>
              <Progress value="100" color="warning" className={classes.progress} />
            </Grid>
            <Grid item xs={3} className={classes.side}>
                  <p style={{margin: 0}}>
                    <i className="fas fa-thumbs-up"></i> 
                    12
                    <i className="fas fa-lightbulb" style={{marginLeft: "1vw"}}></i>
                    5
                    <i className="fas fa-arrow-right" style={{color: "#039ce0", fontSize: "5vw", marginLeft: "1vw"}}></i>
                  </p>
            </Grid>

          
            <hr className={classes.hr}/>

            <Grid item xs={9} className={classes.challenge}>
              <p style={{margin: 0}}>Qualité : Conformité sortie de produit</p>
              <Progress value="100" color="warning" className={classes.progress} />
            </Grid>
            <Grid item xs={3} className={classes.side}>
                <p style={{margin: 0}}>
                    <i className="fas fa-thumbs-up"></i> 
                    6 
                    <i className="fas fa-lightbulb" style={{marginLeft: "1vw"}}></i>
                    17
                    <i className="fas fa-arrow-right" style={{color: "#039ce0", fontSize: "5vw", marginLeft: "1vw"}}></i>
                  </p>
            </Grid>

          <hr className={classes.hr}/>

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


const mapStateToProps = (state) => ({
  challenges: state.challenges
})

export default compose(connect(mapStateToProps),(withStyles(styles)))(All)