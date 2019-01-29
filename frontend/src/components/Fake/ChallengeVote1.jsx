import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'
import PopUpVote from '../PopUp/PopUpVote'
import Backdrop from '../Backdrop'
import { Redirect } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { Progress } from 'reactstrap'
import ImageIcon from '@material-ui/icons/Image';
import Arrow from '../pictures/left-arrow-(2).png'
import Slider from '../Slider';
import TextField from '@material-ui/core/TextField';
import Send from '../pictures/send-button.png'

const styles = theme => ({
  container: {
    padding: "0 5vw"
  },
  logo: {
    width: "100vw",
    margin: 'auto',
    backgroundColor: "#0c54a7",
    padding: "6em 35vw 6em 35vw",
    zIndex: -1
  },
  menu:{
    position: "absolute",
    width: "13vw",
    marginLeft: "-17vw",
    marginTop: "0.6em"
  },
  image: {
    zIndex: -1,
    margin: '4em auto 0 auto',
    width: "100vw",
    height: "16em"
  },
  containerPhoto: {
    display: "flex",
    backgroundColor: "#0c54a7",
    width: "100vw",
    height: "4em",
  },
  arrow: {
    position: "absolute",
    width: "10vw",
    marginTop: "1em",
    marginLeft: "2vw"
  },
  margin: {
    marginLeft: "81vw",
    position: "absolute",
    marginTop: "-1em"
  },
  margin1: {
    marginLeft: "88vw",
    position: "absolute",
    marginTop: "-1em"
  },
  root: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: "14em",
    border: "3px solid #0c54a7",
  },
  root1: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: "2em",
  },
  title: {
    backgroundColor: "#e8e8e8",
    margin: "1em -5vw",
    padding: "2vw 5vw"
  },
  progress: {
    height: "3px",
    width: "60vw",
    marginLeft: "17vw"
  },
  description: {
    border: "1px solid black",
    borderRadius: "5px",
    marginTop: "2em",
    padding: "2vw"
  },
  listItemText:{
    fontSize:'5vw',
  },
  listItemText1:{
    fontSize:'4vw',
    fontWeight: "bold"
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
  delete: {
    position: "absolute",
    padding: "1.5em",
    right: 5,
    top: 5,
    border: "none",
    background: "transparent"
  },
  badge: {
    background: '#00a308',
    color: 'white'
  },
  badge1: {
    background: '#9000ff',
    color: 'white'
  },
  textField: {
    margin: theme.spacing.unit,
    width: '75vw',
  },
  send: {
    width: "8vw",
    marginTop: "1em"
  }
});

class Challenge extends Component {
  state = {
    isOpen : false,
    border: 'none',
    commentaire: ""
  }
  
  backdropClickHandler = () => {
    return (
      <Redirect to="/4"/>,
      this.setState({isOpen: false})
      )
  }

  popupThankVote = (e) => {
    e.preventDefault()
    this.setState({isOpen: true})
  }

  handleClick = () => {
    if(this.state.border === "none"){
      this.setState({border: "solid 1px #039ce0"})
    } else {
      this.setState({border: 'none'})
    }
  }

  render() {
    const { classes } = this.props;
    let route = "/21"
    return (
      <Grid>

{/* POP UP CONFIRM VOTE */}

        {this.state.isOpen &&
          <div>
            <PopUpVote close={this.backdropClickHandler} route={route}/>
            <Backdrop click={this.backdropClickHandler} />
          </div>
        }

        <div>

{/* PICTURE */}

          <div className={classes.containerPhoto}>
            <NavLink to="/4">
              <img src={Arrow} alt="Back" className={classes.arrow}/>
            </NavLink>
              <img src="" alt="Logo" className={classes.image}/>
          </div>

          <div style={{padding: "0 5vw"}}>


{/* CHALLENGE CARD */}

            <Paper className={classes.root} elevation={1}>
              <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={41} color="primary"></Badge>
              <Badge classes={{badge: classes.badge1}} className={classes.margin1} badgeContent={18} color="secondary"></Badge>
              <ListItem>
                <Avatar>
                  <ImageIcon />
                </Avatar>
                <ListItemText classes={{primary:classes.listItemText, secondary:classes.listItemText1}} primary="Améliorer le service utilisateur" secondary="SAV" />
              </ListItem>
              <Progress value="20" className={classes.progress} />
              <p style={{float:'left', fontSize: "4vw", marginLeft: '12vw', marginRight: '37vw'}}>11/12/19</p><p style={{fontSize: "4vw"}}>28/02/20</p>
            </Paper>

            <p className={classes.description}>De nombreux utilisateurs on fait part de leurs mécontentements récents concernant notre produit phare, et malgré leurs plaintes nous n'arrivons pas à identifier les fonctionnalités à leur proposer, qu'en pensez vous ?</p>

{/* SLIDER */}

            <p className={classes.title}>Sondage</p>

            <p>Comment évaluerez-vous le niveau du service utilisateur actuel ?</p>

          </div>

          <Slider/>
                
          <div className={classes.container}>

{/* CATEGORIES */}
            <p className={classes.title}>Principales catégories proposées</p>

            <p>Parmi les choix des catégories suivantes, lesquelles sont les plus influentes sur le défi lancé ? <br/> (sélectionnez 3 catégories principales)</p>

            <Paper className={classes.root1} onClick={this.handleClick} style={{border: this.state.border}} elevation={1}>
              <ListItem>
                <Avatar>
                  <ImageIcon />
                </Avatar>
                <ListItemText primary="Call Center" />
              </ListItem>
            </Paper>

            <Paper className={classes.root1} onClick={this.handleClick} style={{border: this.state.border}} elevation={1}>
              <ListItem>
                <Avatar>
                  <ImageIcon />
                </Avatar>
                <ListItemText primary="CRM" />
              </ListItem>
            </Paper>

            <Paper className={classes.root1} onClick={this.handleClick} style={{border: this.state.border}} elevation={1}>
              <ListItem>
                <Avatar>
                  <ImageIcon />
                </Avatar>
                <ListItemText primary="Informations client" />
              </ListItem>
            </Paper>

            <Paper className={classes.root1} onClick={this.handleClick} style={{border: this.state.border}} elevation={1}>
              <ListItem>
                <Avatar>
                  <ImageIcon />
                </Avatar>
                <ListItemText primary="Réactivité" />
              </ListItem>
            </Paper>

            <Paper className={classes.root1} onClick={this.handleClick} style={{border: this.state.border}} elevation={1}>
              <ListItem>
                <Avatar>
                  <ImageIcon />
                </Avatar>
                <ListItemText primary="Garantie" />
              </ListItem>
            </Paper>

            <Paper className={classes.root1} onClick={this.handleClick} style={{border: this.state.border}} elevation={1}>
              <ListItem>
                <Avatar>
                  <ImageIcon />
                </Avatar>
                <ListItemText primary="Customisation" />
              </ListItem>
            </Paper>

            <p className={classes.title}>Commentaires / Questions</p>

            <p>Vous souhaitez adresser un message au pilote du défi ?</p>

            <TextField
              id="standard-multiline-static"
              label="Ajoutez un commentaire"
              multiline
              rows="1"
              name="commentaire"
              value={this.state.commentaire}
              onChange={(e) => this.setState({commentaire: e.target.value})}
              className={classes.textField}
            />
            <img src={Send} alt="Send message" className={classes.send} onClick={() => this.setState({commentaire: ""})}/>

          </div>

          <Grid container style={{marginBottom: "4em"}}>
{/* BUTTON ENREGISTRER */}
              
            <Grid item xs={6}>
              <NavLink to={`/4`}>
                <button className={classes.button}>Retour</button>
              </NavLink>
            </Grid>

{/* BOUTON PARTAGER */}

            <Grid item xs={6}>
                <button 
                onClick={() => this.setState({isOpen: true})}
                className={classes.button}>Participer</button>
            </Grid>

          </Grid>

        </div>
      </Grid>
    )
  }
}

Challenge.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Challenge)