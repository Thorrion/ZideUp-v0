import React, { Component } from 'react'
import {Row, Col} from 'reactstrap'
import { NavLink } from 'react-router-dom' 
import './RecapTheme.scss'
import PopUpIdea from '../PopUp/PopUpIdea'
import { connect } from 'react-redux'
import Backdrop from '../PopUp/Backdrop/Backdrop';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  textField: {
    marginLeft: '5vw',
    marginRight: theme.spacing.unit,
    width: '90vw',

  },
})

class RecapTheme extends Component {
  state = {
    isOpen : false
  }

  backdropClickHandler = () => {
    return (
      this.setState({isOpen: false})
      )
  }
  
  popupIdea = (e) => {
    e.preventDefault()
    this.setState({isOpen: true})
  }

  render() {
    const { classes } = this.props;
    let indexUrl = parseInt(this.props.index)

    return (
      <div className="RecapThemeContainer">
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
            <div className="RecapThemeTexte" key={index}>
              <Row>
                <p><b>Nom du défi :</b> {challenge.nom}</p>
              </Row>
              <Row>
                <p><b>Périmètre concerné :</b> {challenge.perimetre}</p>
              </Row>

              <Row>
                <p><b>Indicateur clé de performance :</b> {challenge.indicateur}</p>
              </Row>

              <Row>
                <Col>
                <p><b>Actuel :</b> {challenge.actuel}</p>
                </Col>
                <Col>
                <p><b>Cible :</b> {challenge.cible}</p>
                </Col>
              </Row>

              <Row>
                <Col>
                <p><b>Début :</b> {challenge.debut}</p>
                </Col>
                <Col>
                <p><b>Fin :</b> {challenge.fin}</p>
                </Col>
              </Row>
            </div>
            )
          }
        )
      }

      <p className="RecapThemeTitre">Sous thème choisi</p>

      <p><span className="titre">Réactivité</span> <i className="fas fa-thumbs-up"></i> 7 <i className="fas fa-lightbulb"></i> 8</p>

      <p className="RecapThemeTitre">Liste des idées</p>

      <div className="listIdea">


      <Row>
        <Col><p className="TextTheme">Convenir d'une date de réponse au client</p></Col>
        <Col xs="3"><i className="fas fa-thumbs-up"></i> 3 <i className="fas fa-comment"></i> 4</Col>
      </Row>
      <Row>
        <Col><p className="TextTheme">Décider un point de contact unique</p></Col>
        <Col xs="3"><i className="fas fa-thumbs-up"></i> 2 <i className="fas fa-comment"></i> 3</Col>
      </Row>
      <Row>
        <Col><p className="TextTheme">Eviter la prise de contact sauvage</p></Col>
        <Col xs="3"><i className="fas fa-thumbs-up"></i> 1 <i className="fas fa-comment"></i> 2</Col>
      </Row>
      <Row>
        <Col><p className="TextTheme">Redéfinir le standard de réponse au client</p></Col>
        <Col xs="3"><i className="fas fa-thumbs-up"></i> 3 <i className="fas fa-comment"></i> 2</Col>
      </Row>
      <Row>
        <Col><p className="TextTheme">Catégoriser la base de réclamations</p></Col>
        <Col xs="3"><i className="fas fa-thumbs-up"></i> 0 <i className="fas fa-comment"></i> 0</Col>
      </Row>

      </div>

      <p className="RecapThemeTitre">Ajouter une idée</p>

{/* VOTRE QUESTION */}

      <TextField
        id="standard-multiline-static"
        placeholder="Ajoutez votre idée"
        required
        multiline
        rows="1"
        className={classes.textField}
        margin="normal"
      />

          <NavLink to="/5">
            <button 
              className="ButtonRecapIdea"
              >Accueil</button>
          </NavLink>

          <button 
          type="submit"
          className="ButtonRecapIdea"
          onClick={(e) => this.popupIdea(e)}
          >Valider idée</button>

      </div>
    )
  }
}
RecapTheme.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  ...state
})



export default connect(mapStateToProps)(withStyles(styles)(RecapTheme))