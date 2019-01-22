import React, { Component } from 'react'
import { NavLink } from 'react-router-dom' 
import PopUpIdea from '../PopUp/PopUpIdea'
import { connect } from 'react-redux'
import Backdrop from '../Backdrop/Backdrop';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { ideaAction }from '../../stores/actions/ideaAction'


const styles = theme => ({
  container : {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: '5vw',
    marginRight: theme.spacing.unit,
    width: '90vw',
  },
  text1: {
    background: "rgba(3,156,224,0.2)",
    padding: "5em 2vw 0 2vw"
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
  theme: {
    fontSize: "6vw",
    padding: "2vw",
    margin: 0
  },
  idea: {
    padding: "2vw"
  },
  idea2: {
    textAlign: "right",
    margin: "auto"
  }
})

class RecapTheme extends Component {
  state = {
    isOpen : false,
    idea: ""
  }

  backdropClickHandler = () => {
    return (
      this.setState({isOpen: false})
      )
  }
  
  popupIdea = (e) => {
    e.preventDefault()
    if(this.state.idea !== ""){
      this.setState({isOpen: true})
      this.props.ideaAction({
        idea: this.state.idea
      })
    } else {
      alert("Veuillez saisir votre idée.")
    }
  }

  render() {
    const { classes } = this.props;
    let indexUrl = parseInt(this.props.index)
    console.log(this.props)
    return (
      <Grid className={classes.container}>
        {this.state.isOpen &&
        <div>
          <PopUpIdea close={this.backdropClickHandler}/>
          <Backdrop click={this.backdropClickHandler}/> 
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

      <p className={classes.title}>Sous thème choisi</p>

      <Grid container>
        <Grid item xs={9}><p className={classes.theme}>Réactivité</p></Grid>
        <Grid item xs={3} style={{textAlign: "right", margin: "auto", paddingRight: "2vw"}}><i className="fas fa-thumbs-up"></i> 3 <i className="fas fa-comment"></i> 4</Grid>
      </Grid>

      <p className={classes.title}>Liste des idées</p>

      <Grid container className={classes.idea} >
        <Grid item xs={9}><p style={{margin: 0}}>Convenir d'une date de réponse au client</p></Grid>
        <Grid item xs={3} className={classes.idea2}><i className="fas fa-thumbs-up"></i> 3 <i className="fas fa-comment"></i> 4</Grid>
      </Grid>

      <Grid container className={classes.idea}>
        <Grid item xs={9}><p style={{margin: 0}}>Décider un point de contact unique</p></Grid>
        <Grid item xs={3} className={classes.idea2}><i className="fas fa-thumbs-up"></i> 2 <i className="fas fa-comment"></i> 3</Grid>
      </Grid>

      <Grid container className={classes.idea}>
        <Grid item xs={9}><p style={{margin: 0}}>Eviter la prise de contact sauvage</p></Grid>
        <Grid item xs={3} className={classes.idea2}><i className="fas fa-thumbs-up"></i> 1 <i className="fas fa-comment"></i> 2</Grid>
      </Grid>

      <Grid container className={classes.idea}>
        <Grid item xs={9}><p style={{margin: 0}}>Redéfinir le standard de réponse au client</p></Grid>
        <Grid item xs={3} className={classes.idea2}><i className="fas fa-thumbs-up"></i> 3 <i className="fas fa-comment"></i> 2</Grid>
      </Grid>

      <Grid container className={classes.idea}>
        <Grid item xs={9}><p style={{margin: 0}}>Catégoriser la base de réclamations</p></Grid>
        <Grid item xs={3} className={classes.idea2}><i className="fas fa-thumbs-up"></i> 0 <i className="fas fa-comment"></i> 0</Grid>
      </Grid>

      {this.props.ideas.list.map((idea, index) => {
        return(
          <Grid container className={classes.idea} key={index}>
            <Grid item xs={9}><p style={{margin: 0}}>{idea.idea}</p></Grid>
            <Grid item xs={3} className={classes.idea2}><i className="fas fa-thumbs-up"></i> 0 <i className="fas fa-comment"></i> 0</Grid>
          </Grid>
        )
      })}

      <p className={classes.title}>Ajouter une idée</p>

{/* VOTRE QUESTION */}

      <TextField
        id="standard-multiline-static"
        placeholder="Ajoutez votre idée"
        required
        multiline
        value={this.state.idea}
        onChange={(e) => this.setState({idea: e.target.value})}
        rows="1"
        className={classes.textField}
        margin="normal"
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
          onClick={(e) => this.popupIdea(e)}
          className={classes.button}>Valider idée</button>
        </Grid>

      </Grid>

      </Grid>
    )
  }
}
RecapTheme.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  challenges: state.challenges,
  ideas: state.ideas
})

const mapDispatchToProps = {
  ideaAction
}


export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(RecapTheme))