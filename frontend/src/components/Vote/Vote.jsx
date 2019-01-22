import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import PopUpVote from '../PopUp/PopUpVote'
import Backdrop from '../Backdrop/Backdrop'
import { Redirect } from 'react-router-dom'
import Chips from '../Chips/Chips'
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
    width: '90vw',
    marginLeft: '5vw'
  },
  title: {
    backgroundColor: "#e8e8e8",
    margin: "2vw 0",
    padding: "2vw 5vw",
    width: "100vw"
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
  orange: {
    color: "orange"
  }
});


class Vote extends Component {
  state = {
    isOpen : false,
    one:'',
    two:'',
    three:'',
    four:''
  }

  one = () => {
    this.setState({one:'orange', two:'',three:'',four:''})
  }
  two = () => {
    this.setState({one:'orange', two:'orange',three:'',four:''})
  }
  three = () => {
    this.setState({one:'orange', two:'orange',three:'orange',four:''})
  }
  four = () => {
    this.setState({one:'orange', two:'orange',three:'orange',four:'orange'})
  }
  
  backdropClickHandler = () => {
    return (
      <Redirect to="/3"/>,
      this.setState({isOpen: false})
      )
  }
  
  popupThankVote = (e) => {
    e.preventDefault()
    this.setState({isOpen: true})
  }


  render() {
    let indexUrl = parseInt(this.props.index)
    const { classes } = this.props;
    return (
      <Grid>

{/* POP UP CONFIRM VOTE */}

        {this.state.isOpen &&
          <div>
            <PopUpVote close={this.backdropClickHandler} index={indexUrl}/>
            <Backdrop click={this.backdropClickHandler} />
          </div>
        }

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

        <form className={classes.container} onSubmit={(e)=> this.popupThankVote(e)}>


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

{/* STARS RATE */}

          <Grid container style={{textAlign: "center", marginTop: "7vw"}}>

            <Grid item xs={3}>
              <i style={{fontSize: "10vw", color: `${this.state.one}`}} 
                className={`fa fa-star`}
                onClick={this.one}></i>   
              <p>Insuffisant</p> 
            </Grid>

            <Grid item xs={3}>
              <i style={{fontSize: "10vw", color: `${this.state.two}`}} 
                className={`fa fa-star`}
                onClick={this.two}></i>
              <p>Moyen</p>
            </Grid>

            <Grid item xs={3}>
              <i style={{fontSize: "10vw", color: `${this.state.three}`}} 
                className={`fa fa-star`}
                onClick={this.three}></i>
              <p>Bien</p>
            </Grid>

            <Grid item xs={3}>
              <i style={{fontSize: "10vw", color: `${this.state.four}`}} 
                className={`fa fa-star`}
                onClick={this.four}></i>
              <p>Excellent</p>              
            </Grid>
            
          </Grid>

{/* CHIPS */}

          <p className={classes.title}>Choix des sous thèmes clés</p>
        
          <Chips/>

          {/* <p className={classes.title}>Ajouter des items</p>

          <Input
            placeholder="Ajoutez vos items séparés par des virgules"
            className={classes.input}
            inputProps={{
              'aria-label': 'Description',
            }}
            /> */}

          <p className={classes.title}>Commentaires</p>
              
{/* COMMENTAIRE */}
              
          <TextField
            className={classes.input}
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
{/* BUTTON RETOUR */}
            
            <Grid item xs={6}>
              <NavLink to="/3">
                <button className={classes.button}>Retour</button>
              </NavLink>
            </Grid>

{/* BOUTON VOTER */}

            <Grid item xs={6}>
              <button 
              type="submit" 
              className={classes.button}>Voter</button>
            </Grid>

          </Grid>

        </form>

      </Grid>
    )
  }
}

Vote.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  ...state
})



export default connect(mapStateToProps) (withStyles(styles)(Vote))