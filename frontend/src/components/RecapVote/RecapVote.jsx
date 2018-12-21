import React, { Component } from 'react'
import { Row, Col, Progress } from 'reactstrap'
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
      <div className="RecapVoteContainer">
        
        <div className="RecapVoteTexte">
        <Row>
          <p><b>Nom du défi :</b> Améliorer le service utilisateur</p>
        </Row>
        <Row>
          <p><b>Périmètre concerné :</b> Customer Sucess</p>
        </Row>

        <Row>
          <p><b>Indicateur clé de performance :</b> Taux de satisfaction clients</p>
        </Row>

        <Row>
          <Col>
          <p><b>Actuel :</b> 50% </p>
          </Col>
          <Col>
          <p><b>Cible :</b> 85%</p>
          </Col>
        </Row>

        <Row>
          <Col>
          <p><b>Début :</b> 01/01/2019</p>
          </Col>
          <Col>
          <p><b>Fin :</b> 31/03/2019</p>
          </Col>
        </Row>
      </div>

      <p className="RecapVoteTitre">Sondage</p>

{/* QUESTION */}
      <div className="RecapVoteSondage">

        <b className="Question">Comment trouvez vous le service utilisateur actuel ?</b>

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
      </div>

      <p className="RecapVoteTitre">Choix des sous thèmes clés</p>

      <Chips/>

      <p className="RecapVoteTitre">Commentaires</p>
            
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

          <div className="voteButtonsContainer">
            <NavLink to="/5">
              <button 
                className="ButtonRecapVote"
                onClick={this.props.close}
                >Accueil</button>
            </NavLink>

            <button 
            className="ButtonRecapVote"
            onClick={this.props.confirm}
            >Liste idées</button>
          </div>

      </div>
    )
  }
}


RecapVote.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecapVote);