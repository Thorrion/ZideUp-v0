import React, { Component } from 'react'
import { Progress } from 'reactstrap'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chips from './Chips';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  container : {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
    width: '90vw'
  },
  text1: {
    background: "rgba(3,156,224,0.2)",
    padding: "5em 2vw 0 2vw"
  },
  text2: {
    background: "rgba(3,156,224,0.2)",
    width: "100vw",
    padding: "2vw 0",
    textAlign: "center",
    margin : 0
  },
  title: {
    backgroundColor: "#e8e8e8",
    margin: "2vw 0",
    padding: "2vw 5vw",
    width: "100vw"
  },
  button : {
    marginTop: "1em",
    marginBottom: "1em",
    width: "40vw",
    marginLeft: "5vw",
    backgroundColor: "#039ce0",
    border: "none",
    height: "15vw",
    borderRadius: "15px",
    color: 'white',
    fontSize: "4vw",
    fontWeight: "bold"
  },
  graph: {
    padding: "6vw 3vw 0 3vw"
  }
});

class RecapVote extends Component {
  render() {
    const { classes } = this.props;
    let indexUrl = parseInt(this.props.index)
    return (
      <div className={classes.container}>
        
        {
        this.props.challenges.list.map((challenge, index) => {
          return (
            index === indexUrl &&
              <div className={classes.text1} key={index}>

                <Grid>
                  <p><b>Nom du défi :</b> {challenge.nom}</p>
                </Grid>

                <Grid>
                  <p><b>Périmètre concerné :</b> {challenge.perimetre}</p>
                </Grid>

                <Grid>
                  <p><b>Indicateur clé de performance :</b> {challenge.indicateur}</p>
                </Grid>

                <Grid container>
                  <Grid item xs={6} style={{textAlign: "center"}}>
                  <p><b>Actuel :</b> {challenge.actuel} </p>
                  </Grid>

                  <Grid item xs={6} style={{textAlign: "center"}}>
                  <p><b>Cible :</b> {challenge.cible}</p>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={6} style={{textAlign: "center"}}>
                  <p><b>Début :</b> {challenge.debut}</p>
                  </Grid>

                  <Grid item xs={6} style={{textAlign: "center"}}>
                  <p><b>Fin :</b> {challenge.fin}</p>
                  </Grid>
                </Grid>

              </div>
              )
            }
          )
        }

      <p className={classes.title}>Sondage</p>

{/* QUESTION */}


      {     
        this.props.challenges.list.map((challenge, index) => {
          return (
            index === indexUrl &&
              <div className="VoteTexte" key={index}>

                <p style={{margin: 0}} className={classes.text2}><b>{challenge.question}</b></p>
                
              </div>
            )
          })
        }

      <Grid container className={classes.graph}>

        <Grid container>
          <Grid item xs={4}>
            <p>Excellent</p>
          </Grid>
          <Grid item xs={8}>
            <Progress color="success" value="55">55%</Progress>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={4}>
            <p>Bien</p>
          </Grid>
          <Grid item xs={8}>
            <Progress color="info" value="75">75%</Progress>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={4}>
            <p>Moyen</p>
          </Grid>
          <Grid item xs={8}>
            <Progress color="warning" value="60">60%</Progress>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={4}>
            <p>Insuffisant</p>
          </Grid>
          <Grid item xs={8}>
            <Progress color="danger" value="20">20%</Progress>
          </Grid>
        </Grid>

      </Grid>

      <p className={classes.title}>Choix des sous thèmes clés</p>

      <Chips index={indexUrl}/>

      <p className={classes.title}>Commentaires</p>
            
{/* COMMENTAIRE */}
            
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />

      <Grid container>
{/* BUTTON ACCUEIL */}
            
        <Grid item xs={6}>
          <NavLink to="/3">
            <button className={classes.button}>Accueil</button>
          </NavLink>
        </Grid>

{/* BOUTON LISTES IDEES */}

        <Grid item xs={6}>
          <button 
          type="submit" 
          onClick={this.props.confirm}
          className={classes.button}>Liste idées</button>
        </Grid>

      </Grid>

      </div>
    )
  }
}


RecapVote.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  challenges: state.challenges
})



export default connect(mapStateToProps) (withStyles(styles)(RecapVote))