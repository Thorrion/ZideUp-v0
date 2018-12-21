import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Input from '@material-ui/core/Input';
import{ connect } from 'react-redux'
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
  input: {
    margin: theme.spacing.unit,
    width: '90vw',
    marginLeft: '5vw'
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
      <div className="voteContainer">

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
            <div className="VoteTexte" key={index}>

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
                <p><b>Actuel :</b> {challenge.actuel} </p>
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

      <p className="VoteTitre">Ajouter des items</p>

      <Input
        placeholder="Ajoutez vos items séparés par des virgules"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
        />

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

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  
}


export default connect(mapStateToProps,mapDispatchToProps) (withStyles(styles)(Vote))