import React, { Component } from 'react'
import {Row, Col, Container} from 'reactstrap'
import { NavLink } from 'react-router-dom' 
import './RecapTheme.scss'
import PopUpIdea from '../PopUp/PopUpIdea'
import Backdrop from '../PopUp/Backdrop/Backdrop';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
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

    return (
      <Container className="RecapThemeContainer">
        {this.state.isOpen &&
        <div>
          <PopUpIdea close={this.backdropClickHandler}/>
          <Backdrop click={this.backdropClickHandler}/> 
        </div>
        }

        <Row>
        <p>Nom du défi : Améliorer le service utilisateur <i className="fas fa-thumbs-up"></i> 100 <i className="fas fa-lightbulb"></i> 61</p>
      </Row>
      <Row>
        <p>Périmètre concerné : Customer Sucess</p>
      </Row>

      <Row>
        <p>Indicateur clé de performance : Taux de satisfaction clients</p>
      </Row>

      <Row>
        <Col>
        <p>Actuel : 50% </p>
        </Col>
        <Col>
        <p> Cible : 85%</p>
        </Col>
      </Row>
      <Row>
        <Col>
        <p>Début : 01/01/2019</p>
        </Col>
        <Col>
        <p> Fin : 31/03/2019</p>
        </Col>
      </Row>

      <p>Sous thème choisi</p>

      <p><b>Réactivité</b> <i className="fas fa-thumbs-up"></i> 7 <i className="fas fa-lightbulb"></i> 8</p>

      <p>Liste des idées</p>

      <Row>
        <Col>Convenir d'une date de réponse au client</Col>
        <Col xs="3"><i className="fas fa-thumbs-up"></i> 3 <i className="fas fa-comment"></i> 4</Col>
      </Row>
      <Row>
        <Col>Décider un point de contact unique</Col>
        <Col xs="3"><i className="fas fa-thumbs-up"></i> 2 <i className="fas fa-comment"></i> 3</Col>
      </Row>
      <Row>
        <Col>Eviter la prise de contact sauvage</Col>
        <Col xs="3"><i className="fas fa-thumbs-up"></i> 1 <i className="fas fa-comment"></i> 2</Col>
      </Row>
      <Row>
        <Col>Redéfinir le standard de réponse au client</Col>
        <Col xs="3"><i className="fas fa-thumbs-up"></i> 3 <i className="fas fa-comment"></i> 2</Col>
      </Row>
      <Row>
        <Col>Catégoriser la base de réclamations</Col>
        <Col xs="3"><i className="fas fa-thumbs-up"></i> 0 <i className="fas fa-comment"></i> 0</Col>
      </Row>

      <p>Ajouter une idée</p>

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

      <Row>
        <Col>
          <NavLink to="/">
            <button 
              className="ButtonRecapIdea"
              >Accueil</button>
          </NavLink>
        </Col>
        <Col>
          <button 
          type="submit"
          className="ButtonRecapIdea"
          onClick={(e) => this.popupIdea(e)}
          >Valider idée</button>
        </Col>
      </Row>

      </Container>
    )
  }
}
RecapTheme.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecapTheme);