import Chips from '../Chips/Chips'
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PopUpConfirm from '../PopUp/PopUpConfirm';
import PopUpDefi from '../PopUp/PopUpDefi';
import Backdrop from '../Backdrop/Backdrop';
import { connect } from 'react-redux'
import { challengeAction }from '../../stores/actions/challengeAction'

let today = new Date().toISOString().slice(0, 10)

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: '4em'
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
  title: {
    backgroundColor: "#e8e8e8",
    padding: "2vw 5vw",
    margin: "2vw 0",
  },
  button : {
    marginTop: "1em",
    marginBottom: "1em",
    width: "40vw",
    marginLeft: "5vw",
    backgroundColor: "#039ce0",
    border: "none",
    height: "15vw",
    borderRadius: "15px",
    color: 'white',
    fontSize: "4vw",
    fontWeight: "bold"
  }
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
    perimetre:'',
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
    const { classes } = this.props;
    return (

      <Grid container>

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
          required
          id="standard-name"
          label="Nom du défi"
          className={classes.textField}
          name='nom'
          value={this.state.nom}
          onChange={(e) => this.handleChange(e)}
          // margin="normal"
        />

{/* PERIMETRE CONCERNE */}

        {/* <TextField
          required
          id="standard-select-currency-native"
          select
          label="Périmètre concerné"
          className={classes.textField}
          name='perimetre'
          value={this.state.perimetre}
          onChange={(e) => this.handleChange(e)}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
        >
          <option defaultValue=""></option>
          {currencies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField> */}

{/* INDICATEUR DE PERFORMANCE */}

        <TextField
          required
          id="standard-perf"
          label="Indicateur clé de performance"
          className={classes.textField}
          name='indicateur'
          value={this.state.indicateur}
          onChange={(e) => this.handleChange(e)}
        />

{/* ACTUEL */}

        <TextField
          required
          label="Actuel"
          id="simple-start-adornment"
          className={classes.textField2}
          name='actuel'
          value={this.state.actuel}
          onChange={(e) => this.handleChange(e)}
        />
          
{/* CIBLE */}
          
        <TextField
          required
          label="Cible"
          id="simple-start-adornment"
          className={classes.textField2}
          name='cible'
          value={this.state.cible}
          onChange={(e) => this.handleChange(e)}
        />

{/* DEBUT */}

        <TextField
          required
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
          required
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

        <Grid item xs={12}>
          <p className={classes.title}>Sondage</p>
        </Grid>

{/* VOTRE QUESTION */}

        <TextField
          id="standard-multiline-static"
          label="Votre question"
          name='question'
          value={this.state.question}
          onChange={(e) => this.handleChange(e)}
          required
          multiline
          rows="1"
          className={classes.textField}
          margin="normal"
        />

{/* STARS RATE */}

            {/* <Grid container style={{textAlign: "center"}}>
              <Grid item xs={3}>
                <i style={{fontSize: "10vw"}} className={`fa fa-star checked`}></i>   
                <p>Insuffisant</p> 
              </Grid>
              <Grid item xs={3}>
                <i style={{fontSize: "10vw"}} className={`fa fa-star checked`}></i>
                <p>Moyen</p>
              </Grid>
              <Grid item xs={3}>
                <i style={{fontSize: "10vw"}} className={`fa fa-star checked`}></i>
                <p>Bien</p>
              </Grid>
              <Grid item xs={3}>
                <i style={{fontSize: "10vw"}} className={`fa fa-star checked`}></i>
                <p>Excellent</p>              
              </Grid>
            </Grid> */}

{/* CHIPS */}
          
            <Chips/>

            
{/* COMMENTAIRE */}
          {/* <Grid item xs={12}>
            <p className={classes.title}>Commentaires</p>
          </Grid> */}
            
            {/* <TextField
              className={classes.textField}
              id="input-with-icon-textfield"
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
            /> */}

            <Grid container>
{/* BUTTON ENREGISTRER */}
              
              <Grid item xs={6}>
                <NavLink to="/3">
                  <button className={classes.button}>Enregistrer</button>
                </NavLink>
              </Grid>

{/* BOUTON LANCER UN DEFI */}

              <Grid item xs={6}>
                <button 
                type="submit" 
                className={classes.button}>Lancer le défi</button>
              </Grid>

            </Grid>
          </form>

      </Grid>
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
