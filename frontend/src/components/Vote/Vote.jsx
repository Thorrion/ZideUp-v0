import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Row, Col, Container } from 'reactstrap'
import PopUpVote from '../PopUp/PopUpVote'
import Backdrop from '../PopUp/Backdrop/Backdrop'
import { Redirect } from 'react-router-dom'
import Chips from './Chips'
import './Vote.scss'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: '10vh'
  },
  margin: {
    margin: theme.spacing.unit,
    width: '90vw'
  },
});

class Vote extends Component {
  state = {
    isOpen : false
  }

  backdropClickHandler = () => {
    return (
      <Redirect to="/"/>,
      this.setState({isOpen: false})
      )
  }
  
  popupThankVote = (e) => {
    e.preventDefault()
    this.setState({isOpen: true})
  }


  render() {
    const { classes } = this.props;
    return (
      <Container className="voteContainer">

      {this.state.isOpen &&
      <div>
        <PopUpVote close={this.backdropClickHandler}/>
        <Backdrop click={this.backdropClickHandler}/>
      </div>
      }

      <Row>
        <p>Nom du défi : Améliorer le service utilisateur</p>
      </Row>
      <Row>
        <p>Périmètre concerné : Customer Sucess</p>
      </Row>

      <Row>
        <p>Indicateur clé de performance : Taux de satisfacion clients</p>
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


        <form className={classes.container} onSubmit={(e)=> this.popupThankVote(e)}>


        <p>Sondage</p>

{/* QUESTION */}

            <p>Comment trouvez vous le service utilisateur actuel ?</p>

{/* STARS RATE */}

            <span className="fa fa-star checked"></span><p>Insuffisant</p>      <span className="fa fa-star checked"></span><p>Moyen</p>
            <span className="fa fa-star checked"></span><p>Bien</p>
            <span className="fa fa-star checked"></span><p>Excellent</p>

{/* CHIPS */}

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

{/* BUTTON RETOUR */}

            <button 
            className="ButtonCreateDefi">
            Retour</button>

{/* BOUTON VOTER */}

            <button 
            type="submit" 
            className="ButtonCreateDefi">
            Voter</button>

          </form>
      </Container>
    )
  }
}

Vote.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Vote);