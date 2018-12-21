import Chips from './Chips'
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import './CreateDefi.scss'
import PopUpConfirm from '../PopUp/PopUpConfirm';
import PopUpDefi from '../PopUp/PopUpDefi';
import Backdrop from '../PopUp/Backdrop/Backdrop';

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
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '90vw',
    marginLeft: '5vw'
  },
  textField2: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
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
    popupThank: false
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

  
  render() {
    const { classes } = this.props;
    return (

      <React.Fragment>

        {this.state.popupConfirm &&
        <div>
          <PopUpConfirm close={this.backdropClickHandler} confirm={(e)=> this.popupThank(e)}/>
          <Backdrop click={this.backdropClickHandler}/>
        </div>
        }
        {this.state.popupThank &&
        <div>
          <PopUpDefi close={this.backdropClickHandler}/>
          <Backdrop click={this.backdropClickHandler}/>

        </div>
          
        }

          <form className={classes.container} onSubmit={(e) =>this.popupConfirm(e)}>

{/* NOM DU DEFI */}

            {/* <i class="fab fa-safari"></i> */}
            <TextField
              required
              id="standard-name"
              label="Nom du défi"
              className={classes.textField}
              // value={this.state.name}
              // onChange={this.handleChange('name')}
              // margin="normal"
            />

{/* PERIMETRE CONCERNE */}

            {/* <i class="fas fa-chart-line"></i> */}
            <TextField
              required
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

            {/* <i class="fas fa-vector-square"></i> */}
            <TextField
              required
              id="standard-perf"
              label="Indicateur clé de performance"
              className={classes.textField}
              // value={this.state.name}
              // onChange={this.handleChange('name')}
              // margin="normal"
            />

{/* ACTUEL */}

            <TextField
              required
              label="Actuel"
              id="simple-start-adornment"
              className={classes.textField2}
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
            />
          
{/* CIBLE */}
          
            <TextField
              required
              label="Cible"
              id="simple-start-adornment"
              className={classes.textField2}
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
            />

{/* DEBUT */}

            <form className={classes.container} noValidate>
              <TextField
                required
                id="date"
                label="Début"
                type="date"
                defaultValue={today}
                className={classes.textField2}
                InputLabelProps={{
                  shrink: true,
                }}
                />
            </form>

{/* FIN */}

            <form className={classes.container} noValidate>
              <TextField
                required
                id="date"
                label="Fin"
                type="date"
                defaultValue={today}
                className={classes.textField2}
                InputLabelProps={{
                  shrink: true,
                }}
                />
            </form>

            <p className="textCat">Sondage</p>

{/* VOTRE QUESTION */}

            <TextField
              id="standard-multiline-static"
              label="Votre question"
              required
              multiline
              rows="1"
              className={classes.textField}
              margin="normal"
              />

{/* STARS RATE */}

            <span className="fa fa-star checked"></span><p>Insuffisant</p>      <span className="fa fa-star checked"></span><p>Moyen</p>
            <span className="fa fa-star checked"></span><p>Bien</p>
            <span className="fa fa-star checked"></span><p>Excellent</p>

{/* CHIPS */}
          
            <Chips/>

            <p className="textCat">Commentaires</p>
            
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

{/* BUTTON ENREGISTRER */}

            {/* <Button variant="contained" size="large" color="primary" className={classes.margin2}>
                Enregistrer
            </Button> */}
            <button className="ButtonCreateDefi">Enregistrer</button>

{/* BOUTON LANCER UN DEFI */}

            {/* <Button type="submit" variant="contained" size="large" color="primary" className={classes.margin2}>
              Lancer le défi
            </Button> */}
            <button 
            type="submit" 
            className="ButtonCreateDefi">Lancer le défi</button>

          </form>

      </React.Fragment>
    );
  }
}

CreateDefi.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateDefi);