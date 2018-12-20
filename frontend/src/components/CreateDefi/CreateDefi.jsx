import Navbar from '../Navbar/Navbar';
import Chips from './Chips'
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import './CreateDefi.scss'


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
  render() {
    const { classes } = this.props;
    return (

      <React.Fragment>

{/* NAVBAR */}

        <Navbar/>

          <div className={classes.container}>

{/* NOM DU DEFI */}

            <i class="fab fa-safari"></i>
            <Input
              placeholder="Nom du défi"
              className={classes.input2}
              inputProps={{
                'aria-label': 'Description',
              }}
            />

{/* PERIMETRE CONCERNE */}

            <i class="fas fa-chart-line"></i>
            <TextField
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

            <i class="fas fa-vector-square"></i>
            <Input
              placeholder="Indicateur clé de performance"
              className={classes.input2}
              inputProps={{
                'aria-label': 'Description',
              }}
            />

{/* ACTUEL */}

            <TextField
              label="Actuel"
              id="simple-start-adornment"
              className={classes.textField2}
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
            />
          
{/* CIBLE */}
          
            <TextField
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
                id="date"
                label="Début"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField2}
                InputLabelProps={{
                  shrink: true,
                }}
                />
            </form>

{/* FIN */}

            <form className={classes.container} noValidate>
              <TextField
                id="date"
                label="Fin"
                type="date"
                defaultValue="2018-05-24"
                className={classes.textField2}
                InputLabelProps={{
                  shrink: true,
                }}
                />
            </form>

            <p>Sondage</p>

{/* VOTRE QUESTION */}

            <TextField
              id="standard-multiline-static"
              label="Votre question"
              multiline
              rows="1"
              className={classes.textField}
              margin="normal"
              />

{/* STARS RATE */}

            <span class="fa fa-star checked"></span><p>Insuffisant</p>         <span class="fa fa-star checked"></span><p>Moyen</p>
            <span class="fa fa-star checked"></span><p>Bien</p>
            <span class="fa fa-star checked"></span><p>Excellent</p>

{/* CHIPS */}
          
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

{/* BUTTON ENREGISTRER */}

            <Button variant="contained" size="large" color="primary" className={classes.margin2}>
                Enregistrer
            </Button>

{/* BOUTON LANCER UN DEFI */}

            <Button variant="contained" size="large" color="primary" className={classes.margin2}>
              Lancer le défi
            </Button>

          </div>

      </React.Fragment>
    );
  }
}

CreateDefi.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateDefi);