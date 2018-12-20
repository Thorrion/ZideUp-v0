import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import PopUpVote from '../PopUp/PopUpVote'
import Backdrop from '../PopUp/Backdrop/Backdrop'
import { Redirect } from 'react-router-dom'
import Chips from './Chips'
import './Vote.scss'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
    width: '90vw'
  },
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
      <div className="voteContainer">

      {this.state.isOpen &&
      <div>
        <PopUpVote close={this.backdropClickHandler}/>
        <Backdrop click={this.backdropClickHandler}/>
      </div>
      }

      <div className="VoteTexte">
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


        <form className={classes.container} onSubmit={(e)=> this.popupThankVote(e)}>


        <p className="VoteTitre">Sondage</p>

{/* QUESTION */}

            <p className="Question">Comment trouvez vous le service utilisateur actuel ?</p>

{/* STARS RATE */}

            <div className="StarsRating">
              <Row>
                <Col xs="3">
                  <i 
                  className={`fa fa-star checked ${this.state.one}`}
                  onClick={this.one}
                  ></i>   
                  <p>Insuffisant</p> 
                </Col>
                <Col xs="3">
                  <i 
                  className={`fa fa-star checked ${this.state.two}`}
                  onClick={this.two}
                  ></i>
                  <p>Moyen</p>
                </Col>
                <Col xs="3">
                  <i 
                  className={`fa fa-star checked ${this.state.three}`}
                  onClick={this.three}
                  ></i>
                  <p>Bien</p>
                </Col>
                <Col xs="3">
                  <i 
                  className={`fa fa-star checked ${this.state.four}`}
                  onClick={this.four}
                  ></i>
                  <p>Excellent</p>              
                </Col>
              </Row>
            </div>

{/* CHIPS */}

            <p className="VoteTitre">Choix des sous thèmes clés</p>
          
            <Chips/>

            <p className="VoteTitre">Commentaires</p>
            
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

            <NavLink to="5">
              <button 
              className="ButtonVote">
              Retour</button>
            </NavLink>

{/* BOUTON VOTER */}

          <button 
              type="submit" 
              className="ButtonVote"
          >Voter</button>


          </form>

      </div>
    )
  }
}

Vote.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Vote);