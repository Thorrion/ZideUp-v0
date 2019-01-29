import Categories from './Categories'
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import PopUpConfirm from '../PopUp/PopUpConfirm';
import PopUpDefi from '../PopUp/PopUpDefi';
import Backdrop from '../Backdrop';
import { connect } from 'react-redux'
import { challengeAction }from '../../stores/actions/challengeAction'
import LogoPhoto from '../pictures/image-add-button.png'
import Arrow from '../pictures/left-arrow-(2).png'
import Slider from '../Slider';

let today = new Date().toISOString().slice(0, 10)

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: '1em',
    paddingBottom: "3em"
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
  button : {
    marginTop: "1em",
    marginBottom: "1em",
    width: "40vw",
    marginLeft: "5vw",
    backgroundColor: "#039ce0",
    border: "none",
    height: "10vw",
    borderRadius: "15px",
    color: 'white',
    fontSize: "4vw",
    fontWeight: "bold"
  },
  logo: {
    width: "30vw",
    margin: 'auto',
  },
  containerPhoto: {
    display: "flex",
    backgroundColor: "#039ce0",
    width: "100vw",
    height: "20em"
  },
  arrow: {
    position: "absolute",
    width: "10vw",
    marginTop: "1em",
    marginLeft: "2vw"
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
    image: "",
    nom:'',
    perimetre:'',
    debut: "",
    fin: "",
    description: "",
    ideas: []
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
    let id = this.props.challenges.list.length + 1
    this.setState({popupConfirm: false, popupThank: true})
    e.preventDefault()
    this.props.challengeAction({
      id: id,
      image: this.state.image,
      nom:this.state.nom,
      perimetre:this.state.perimetre,
      debut: this.state.debut,
      fin: this.state.fin,
      description: this.state.description,
      categories: this.props.categories,
      ideas: this.state.ideas
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

{/* PHOTO */}

        <div className={classes.containerPhoto}>
        <NavLink to="/4">
          <img src={Arrow} alt="Back" className={classes.arrow}/>
        </NavLink>
          <img src={LogoPhoto} alt="Logo" className={classes.logo}/>
        </div>

        <form className={classes.container} onSubmit={(e) => this.popupConfirm(e)}>

{/* NOM DU DEFI */}

        <TextField
          required
          label="Nom du défi"
          className={classes.textField}
          name='nom'
          value={this.state.nom}
          onChange={(e) => this.handleChange(e)}
        />

{/* PERIMETRE CONCERNE */}

        <TextField
          required
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
        >
          <option defaultValue=""></option>
          {currencies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

{/* DEBUT */}

        <TextField
          required
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

{/* DESCRIPTION */}
        
        <TextField
          label="Description"
          multiline
          rows="4"
          name="description"
          value={this.state.description}
          onChange={(e) => this.handleChange(e)}
          className={classes.textField}
        />

{/* SLIDER */}

          <Slider/>

{/* CATEGORIES */}
          
            <Categories/>

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
