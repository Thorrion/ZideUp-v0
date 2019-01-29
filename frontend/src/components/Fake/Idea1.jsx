import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import PopUpAvis from '../PopUp/PopUpAvis'
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
import Diagram from './Diagram1'
import Thumb from '../pictures/thumb-up.png'
import calendar from '../pictures/calendar.png'
import TextField from '@material-ui/core/TextField';
import Send from '../pictures/send-button.png'


const styles = theme => ({
  container: {
    padding: "0 5vw 3em"
  },
  logo: {
    width: "100vw",
    margin: 'auto',
    backgroundColor: "#fdb920",
    padding: "6em 35vw 6em 35vw",
    zIndex: -1
  },
  image: {
    zIndex: -1,
    margin: '4em auto 0 auto',
    width: "100vw",
    height: "16em"
  },
  containerPhoto: {
    display: "flex",
    backgroundColor: "#fdb920",
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
    border: "3px solid #fdb920",
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
    marginTop: "1em",
    padding: "2vw"
  },
  listItemText:{
    fontSize:'5vw',
  },
  listItemText1:{
    fontSize:'4vw',
    fontWeight: "bold"
  },
  badge: {
    color: "white",
    backgroundColor: '#48bc05'
  },
  avatar: {
    position: "absolute",
  },
  editor: {
    marginTop: "1em",
    marginLeft: "11vw"
  },
  thumb: {
    width: "11vw",
    position: "absolute",
    marginTop: "-4em",
    marginLeft: "48vw"
  },
  calendar: {
    width: "10vw",
    position: "absolute",
    marginTop: "-4em",
    marginLeft: "65vw",
  },
  date: {
    position: "absolute",
    marginTop: "-3em",
    marginLeft: "80vw",
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


  render() {
    const { classes } = this.props;
    return (
      <Grid>

{/* POP UP CONFIRM VOTE */}

        {this.state.isOpen &&
          <div>
            <PopUpAvis close={this.backdropClickHandler}/>
            <Backdrop click={this.backdropClickHandler} />
          </div>
        }

        <div>

{/* PICTURE */}

          <div className={classes.containerPhoto}>
            <NavLink to="/22">
              <img src={Arrow} alt="Back" className={classes.arrow}/>
            </NavLink>
              <img src="" alt="Logo" className={classes.image}/>
          </div>

          <div style={{padding: "0 5vw 4em"}}>

{/* IDEA CARD */}

            <div>
              <Paper className={classes.root} elevation={1} >
                <Badge className={classes.margin1} badgeContent={3} classes={{badge: classes.badge}}></Badge>
                <ListItem>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                  <ListItemText classes={{primary:classes.listItemText, secondary:classes.listItemText1}} primary="Convenir d'une date de réponse au client" secondary="Réactivité" />
                </ListItem>
                <Progress value="20" className={classes.progress} />
                <p style={{float:'left', fontSize: "4vw", marginLeft: '12vw', marginRight: '37vw'}}>11/12/19</p><p style={{fontSize: "4vw"}}>28/02/20</p>
              </Paper>

              <div>
                <Avatar className={classes.avatar}>JD</Avatar>
                <p className={classes.editor}>Julien Dubois<br/>Team <span style={{color: "blue"}}><i>Commercial</i></span></p>
                <img src={Thumb} alt='Thumb' className={classes.thumb} onClick={() => this.setState({isOpen: true})}/>
                <img src={calendar} alt="Calendrier" className={classes.calendar}/>
                <i className={classes.date}>18/11</i>
              </div>

              <p className={classes.description}>Je propose que l'on ajoute un paramètre dans le formulaire de réponse pour fixer une date de retour vers le client. Ainsi on pourra piloter les réponses attendues et savoir si nous améliorons la réactivité. Une règle de répondre sous une semaine maximum peut être posée en plus</p>
            </div>

{/* DIAGRAM */}

            <p className={classes.title}>Faisabilité</p>

            <Diagram/>

            <p className={classes.title}>Commentaires</p>

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

        </div>

      </Grid>
    )
  }
}

Challenge.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  ...state
})



export default connect(mapStateToProps) (withStyles(styles)(Challenge))