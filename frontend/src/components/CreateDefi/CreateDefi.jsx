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
    width: '90vw'
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
    value: 'Production ',
    label: 'Production ',
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
    one:'',
    two:'',
    three:'',
    four:''
  }

  backdropClickHandler = () => {
    this.setState({popupConfirm: false, popupThank: false})
  }
  
  popupConfirm = (e) => {
    e.preventDefault()
    this.setState({popupConfirm: true, popupThank: false})
  }
  
  popupThank = () => {
    this.setState({popupConfirm: false, popupThank: true})
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

  
  render() {
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

          <form className={classes.container} onSubmit={(e) =>this.popupConfirm(e)}>

{/* NOM DU DEFI */}

            <TextField
              // required
              id="standard-name"
              label="Nom du défi"
              className={classes.textField}
              // value={this.state.name}
              // onChange={this.handleChange('name')}
              // margin="normal"
            />

{/* PERIMETRE CONCERNE */}

            <TextField
              // required
              id="standard-select-currency-native"
              select
              label="Périmètre concerné"
              className={classes.input2}
              // value={this.state.currency}
              // onChange={this.handleChange('currency')}
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
              // value={this.state.name}
              // onChange={this.handleChange('name')}
              // margin="normal"
            />

{/* ACTUEL */}

            <TextField
              // required
              label="Actuel"
              id="simple-start-adornment"
              className={classes.textField2}
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
            />
          
{/* CIBLE */}
          
            <TextField
              // required
              label="Cible"
              id="simple-start-adornment"
              className={classes.textField2}
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
            />

{/* DEBUT */}

              <TextField
                // required
                id="date"
                label="Début"
                type="date"
                defaultValue={today}
                className={classes.textField2}
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
                InputLabelProps={{
                  shrink: true,
                }}
                />

            <p className="CreateDefiTitre">Sondage</p>

{/* VOTRE QUESTION */}

            <TextField
              id="standard-multiline-static"
              label="Votre question"
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

export default withStyles(styles)(CreateDefi);