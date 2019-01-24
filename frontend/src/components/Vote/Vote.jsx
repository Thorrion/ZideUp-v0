import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import PopUpVote from '../PopUp/PopUpVote'
import Backdrop from '../Backdrop/Backdrop'
import { Redirect } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { Progress } from 'reactstrap'
import ImageIcon from '@material-ui/icons/Image';
import LogoPhoto from '../Director/pictures/image-add-button.png'
import Arrow from '../Director/pictures/left-arrow-(2).png'
import moment from 'moment'
import Diagram from './Diagram';
import All from '../Navbar/pictures/menu1.png'

const styles = theme => ({
  container: {
    padding: "0 5vw 3em"
  },
  logo: {
    width: "30vw",
    margin: 'auto',
  },
  menu:{
    position: "absolute",
    width: "13vw",
    marginLeft: "-17vw",
    marginTop: "0.6em"
  },
  image: {
    margin: '4em auto 2em auto',
    width: "95vw",
    height: "15em"
  },
  containerPhoto: {
    display: "flex",
    backgroundColor: "#0c54a7",
    width: "100vw",
    height: "20em",
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
    marginTop: "-2em",
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
  }
});


class Vote extends Component {
  state = {
    isOpen : false,
    one:'',
    two:'',
    three:'',
    four:''
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
    let indexUrl = parseInt(this.props.index)
    const { classes } = this.props;
    return (
      <Grid>

{/* POP UP CONFIRM VOTE */}

        {this.state.isOpen &&
          <div>
            <PopUpVote close={this.backdropClickHandler} index={indexUrl}/>
            <Backdrop click={this.backdropClickHandler} />
          </div>
        }

        {
        this.props.challenges.list.map((challenge) => {
          return (
            challenge.id === indexUrl &&
              <div key={challenge.id}>

{/* PICTURE */}
                <div className={classes.containerPhoto}>
                  <NavLink to="/4">
                    <img src={Arrow} alt="Back" className={classes.arrow}/>
                  </NavLink>
                  {challenge.image !== "" ?
                    <img src={challenge.image} alt="Logo" className={classes.image}/>
                  :
                    <img src={LogoPhoto} alt="Logo" className={classes.logo}/>
                  }
                  <NavLink to="/4">
                    <img src={All} alt="All Ideas" className={classes.menu}/>
                  </NavLink>
                  </div>

                <div className={classes.container}>


{/* CHALLENGE CARD */}

                <Paper className={classes.root} elevation={1} key={challenge.id}>
                  <Badge className={classes.margin} badgeContent={0} color="primary"></Badge>
                  <Badge className={classes.margin1} badgeContent={0} color="secondary"></Badge>
                  <ListItem>
                    <Avatar>
                      <ImageIcon />
                    </Avatar>
                    <ListItemText primary={challenge.nom} secondary={challenge.perimetre} />
                  </ListItem>
                  <Progress value="0" className={classes.progress} />
                  <p style={{float:'left', fontSize: "5vw", marginLeft: '10vw', marginRight: '32vw'}}>{moment(new Date(challenge.debut)).format('DD/MM/YY')}</p><p style={{fontSize: "5vw"}}>{moment(new Date(challenge.fin)).format('DD/MM/YY')}</p>
                </Paper>

                <p className={classes.description}>{challenge.description}</p>

{/* THEMES */}

                {challenge.items.list.map((chip) => {
                  return(
                    <Paper className={classes.root1} elevation={1} key={chip.id}>
                      <Badge className={classes.margin} badgeContent={0} color="primary"></Badge>
                      <Badge className={classes.margin1} badgeContent={0} color="secondary"></Badge>
                      <ListItem>
                        <Avatar>
                          <ImageIcon />
                        </Avatar>
                        <ListItemText primary={chip.name} />
                      </ListItem>
                    </Paper>
                    )
                })}

                <p className={classes.title}>Scoring</p>

                <Diagram/>
                </div>

              </div>
              )
            }
          )
        }
        

{/* CHIPS */}

          {/* <p className={classes.title}>Choix des sous thèmes clés</p> */}
        
          {/* <Chips/> */}

          {/* <p className={classes.title}>Ajouter des items</p>

          <Input
            placeholder="Ajoutez vos items séparés par des virgules"
            className={classes.input}
            inputProps={{
              'aria-label': 'Description',
            }}
            /> */}

      </Grid>
    )
  }
}

Vote.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  ...state
})



export default connect(mapStateToProps) (withStyles(styles)(Vote))