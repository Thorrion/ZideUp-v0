import React, { Component } from 'react'
import { Row, Col, Container, Progress } from 'reactstrap'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './RecapVote.scss';
import Chips from './Chips';


const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
    width: '90vw'
  },
});


class RecapVote extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Container className="RecapVoteContainer">
        
      <Row>
        <p>Nom du défi : Améliorer le service utilisateur</p>
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

      <p>Sondage</p>

{/* QUESTION */}

      <p>Comment trouvez vous le service utilisateur actuel ?</p>

      <Row>
        <Col>
          <p>Excellent</p>
        </Col>
        <Col xs="8">
          <Progress color="success" value="55">55%</Progress>
        </Col>
      </Row>

      <Row>
        <Col>
          <p>Bien</p>
        </Col>
        <Col xs="8">
          <Progress color="info" value="75">75%</Progress>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Moyen</p>
        </Col>
        <Col xs="8">
          <Progress color="warning" value="60">60%</Progress>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Insuffisant</p>
        </Col>
        <Col xs="8">
          <Progress color="danger" value="20">20%</Progress>
        </Col>
      </Row>

      <p>Choix des sous thèmes clés</p>

      <Chips/>

      <p>Commentaires</p>
            
{/* COMMENTAIRE */}
            
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        // label="Ajoutez un commentaire"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />

      <Row>
        <Col>
          <NavLink to="/">
            <button 
              className="ButtonRecapVote"
              onClick={this.props.close}
              >Accueil</button>
          </NavLink>
        </Col>
        <Col>
          <button 
          className="ButtonRecapVote"
          onClick={this.props.confirm}
          >Liste idées</button>
        </Col>
      </Row>

      </Container>
    )
  }
}


RecapVote.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecapVote);