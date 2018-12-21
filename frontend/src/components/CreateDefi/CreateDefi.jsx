import Chips from './Chips'
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Row, Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PopUpConfirm from '../PopUp/PopUpConfirm';
import PopUpDefi from '../PopUp/PopUpDefi';
import Backdrop from '../PopUp/Backdrop/Backdrop';
import { connect } from 'react-redux'
import { challengeAction }from '../../stores/actions/challengeAction'
import './CreateDefi.scss'

let today = new Date().toISOString().slice(0, 10)

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: '10vh'
  },
  input: {
    margin: theme.spacing.unit,
    width: '90vw',
    marginLeft: '5vw'
  },
  input2: {
    margin: theme.spacing.unit,
    width: '90vw',
    marginLeft: '5vw'
  },
  textField: {
    margin: theme.spacing.unit,
    width: '90vw',
    marginLeft: '5vw'
  },
  textField2: {
    margin: theme.spacing.unit,
    width: '41vw',
    marginLeft: '5vw'
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: '90vw',
  },
  margin: {
    margin: theme.spacing.unit,
    width: '90vw',
    marginLeft: '5vw'

  },
  margin2: {
    margin: theme.spacing.unit,
    width: '45vw',
    marginLeft: '2.5vw'
  },
});

const currencies = [
  {
    value: 'R&D',
    label: 'R&D',
  },
  {
    value: 'Production',
    label: 'Production',
  },
  {
    value: 'Qualité',
    label: 'Qualité',
  },
  {
    value: 'S.A.V',
    label: 'S.A.V',
  },
  {
    value: 'Supply Chain',
    label: 'Supply Chain',
  },
];



class CreateDefi extends Component {
  state = {
    popupConfirm: false,
    popupThank: false,
    nom:'',
    perimetre:'R&D',
    indicateur:'',
    actuel:'',
    cible:'',
    debut: "",
    fin: "",
    question:'',
    items:[],
    commentaire:'',
    one:'',
    two:'',
    three:'',
    four:''
  }


  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  backdropClickHandler = () => {
    this.setState({popupConfirm: false, popupThank: false})
  }
  
  popupConfirm = (e) => {
    e.preventDefault()
    this.setState({popupConfirm: true, popupThank: false})
  }
  
  popupThank = (e) => {
    this.setState({popupConfirm: false, popupThank: true})
    e.preventDefault()
    this.props.challengeAction({
    nom:this.state.nom,
    perimetre:this.state.perimetre,
    indicateur:this.state.indicateur,
    actuel:this.state.actuel,
    cible:this.state.cible,
    debut: this.state.debut,
    fin: this.state.fin,
    question:this.state.question,
    items:this.state.items,
    commentaire:this.state.commentaire,
    })
  }
  
  render() {
    console.log(this.props)
    const { classes } = this.props;
    return (

      <div className="CreateDefiContainer">

        {this.state.popupConfirm &&
        <div>
          <PopUpConfirm close={this.backdropClickHandler} confirm={(e)=> this.popupThank(e)}/>
          <Backdrop click={this.backdropClickHandler}/>
        </div>
        }
        {this.state.popupThank &&
        <div>
          <PopUpDefi close={this.backdropClickHandler}/>
          <Backdrop/>

        </div>
          
        }

          <form className={classes.container} onSubmit={(e) => this.popupConfirm(e)}>

{/* NOM DU DEFI */}

            <TextField
              // required
              id="standard-name"
              label="Nom du défi"
              className={classes.textField}
              name='nom'
              value={this.state.nom}
              onChange={(e) => this.handleChange(e)}
              // margin="normal"
            />

{/* PERIMETRE CONCERNE */}

            <TextField
              // required
              id="standard-select-currency-native"
              select
              label="Périmètre concerné"
              className={classes.input2}
              name='perimetre'
              value={this.state.perimetre}
              onChange={(e) => this.handleChange(e)}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu,
                },
              }}
              // helperText="Please select your currency"
              margin="normal"
            >
              {currencies.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>

{/* INDICATEUR DE PERFORMANCE */}

            <TextField
              // required
              id="standard-perf"
              label="Indicateur clé de performance"
              className={classes.textField}
              name='indicateur'
              value={this.state.indicateur}
              onChange={(e) => this.handleChange(e)}
            />

{/* ACTUEL */}

            <TextField
              // required
              label="Actuel"
              id="simple-start-adornment"
              className={classes.textField2}
              name='actuel'
              value={this.state.actuel}
              onChange={(e) => this.handleChange(e)}
              
            />
          
{/* CIBLE */}
          
            <TextField
              // required
              label="Cible"
              id="simple-start-adornment"
              className={classes.textField2}
              name='cible'
              value={this.state.cible}
              onChange={(e) => this.handleChange(e)}
              
            />

{/* DEBUT */}

              <TextField
                // required
                id="date"
                label="Début"
                type="date"
                defaultValue={today}
                className={classes.textField2}
                name='debut'
                value={this.state.debut}
                onChange={(e) => this.handleChange(e)}
                InputLabelProps={{
                  shrink: true,
                }}
                />

{/* FIN */}

              <TextField
                // required
                id="date"
                label="Fin"
                type="date"
                defaultValue={today}
                className={classes.textField2}
                name='fin'
                value={this.state.fin}
                onChange={(e) => this.handleChange(e)}
                InputLabelProps={{
                  shrink: true,
                }}
                />

            <p className="CreateDefiTitre">Sondage</p>

{/* VOTRE QUESTION */}

            <TextField
              id="standard-multiline-static"
              label="Votre question"
              name='question'
              value={this.state.question}
              onChange={(e) => this.handleChange(e)}
              // required
              multiline
              rows="1"
              className={classes.textField}
              margin="normal"
              />

{/* STARS RATE */}

            <div className="StarsRating">
              <Row>
                <Col xs="3">
                  <i 
                  className={`fa fa-star checked ${this.state.one}`}
                  // onClick={this.one}
                  ></i>   
                  <p>Insuffisant</p> 
                </Col>
                <Col xs="3">
                  <i 
                  className={`fa fa-star checked ${this.state.two}`}
                  // onClick={this.two}
                  ></i>
                  <p>Moyen</p>
                </Col>
                <Col xs="3">
                  <i 
                  className={`fa fa-star checked ${this.state.three}`}
                  // onClick={this.three}
                  ></i>
                  <p>Bien</p>
                </Col>
                <Col xs="3">
                  <i 
                  className={`fa fa-star checked ${this.state.four}`}
                  // onClick={this.four}
                  ></i>
                  <p>Excellent</p>              
                </Col>
              </Row>
            </div>

{/* CHIPS */}
          
            <Chips/>

            <p className="CreateDefiTitre">Commentaires</p>
            
{/* COMMENTAIRE */}
            
            <TextField
              className={classes.margin}
              id="input-with-icon-textfield"
              // label="Ajoutez un commentaire"
              name='commentaire'
              value={this.state.commentaire}
              onChange={(e) => this.handleChange(e)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />

            <div className="buttonsDefis">
              {/* BUTTON ENREGISTRER */}
              
              <NavLink to="/3">
                <button className="ButtonCreateDefi">Enregistrer</button>
              </NavLink>
              {/* BOUTON LANCER UN DEFI */}

              <button 
              type="submit" 
              className="ButtonCreateDefi">Lancer le défi</button>
            </div>
          </form>

      </div>
    );
  }
}

CreateDefi.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  challengeAction
}


export default connect(mapStateToProps,mapDispatchToProps) (withStyles(styles)(CreateDefi))
