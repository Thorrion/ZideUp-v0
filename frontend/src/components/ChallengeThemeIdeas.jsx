import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { Progress } from 'reactstrap'
import ImageIcon from '@material-ui/icons/Image';
import LogoPhoto from './pictures/photo-camera.png'
import Arrow from './pictures/left-arrow-(2).png'
import moment from 'moment'
import More from './pictures/plus.png'

const styles = theme => ({
  container: {
    padding: "0 5vw 4em"
  },
  logo: {
    width: "30vw",
    margin: 'auto',
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
  margin2: {
    marginLeft: "65vw",
    position: "absolute",
    marginTop: "1em"
  },
  margin3: {
    marginLeft: "80vw",
    position: "absolute",
    marginTop: "1em"
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
    border: "2px solid #0c54a7",
  },
  root2: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: "2em",
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
  more: {
    zIndex: 6,
    width: "12vw",
    position:"absolute",
    right: "2vw",
    top: "0.6em",
    background: "orange",
    borderRadius: "50%",
    padding: "3vw"
  },
  badge: {
    background: '#00a308',
    color: 'white'
  },
  badge1: {
    background: '#9000ff',
    color: 'white'
  },
  badge2: {
    background: '#fdb920',
    color: 'white'
  },
  badge3: {
    background: '#00a308',
    fontSize: "5vw",
    fontWeight: "bold",
    marginTop: '0.3em',
    padding: "5vw",
    color: 'white'
  },
  badge4: {
    background: '#fdb920',
    fontSize: "5vw",
    marginTop: '0.3em',
    fontWeight: "bold",
    padding: "5vw",
    color: 'white'
  }
});

class ChallengeThemeIdeas extends Component {
  render() {
    let idUrl = parseInt(this.props.id)
    let categoryId = parseInt(this.props.categoryid)
    const { classes } = this.props;
    return (
      <Grid>

        {
        this.props.challenges.list.map((challenge) => {
          return (
            challenge.id === idUrl &&
            <div key={challenge.id}>

{/* PICTURE */}

              <div className={classes.containerPhoto}>
                <NavLink to={`/7/${idUrl}`}>
                  <img src={Arrow} alt="Back" className={classes.arrow}/>
                </NavLink>
                {challenge.image !== "" ?
                  <img src={challenge.image} alt="Logo" className={classes.image}/>
                :
                  <img src={LogoPhoto} alt="Logo" className={classes.logo}/>
                }
                <NavLink to={`/10/${idUrl}`}>
                  <img src={More} alt="Add Challenge" className={classes.more}/>
                </NavLink>
              </div>

              <div className={classes.container}>

{/* CHALLENGE CARD */}

                <Paper className={classes.root} elevation={1} key={challenge.id}>
                  <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={0} color="primary"></Badge>
                  <Badge classes={{badge: classes.badge2}} className={classes.margin1} badgeContent={0} color="secondary"></Badge>
                  <ListItem>
                    <Avatar>
                      <ImageIcon />
                    </Avatar>
                    <ListItemText classes={{primary:classes.listItemText, secondary:classes.listItemText1}} primary={challenge.nom} secondary={challenge.perimetre} />
                  </ListItem>
                  <Progress value="0" className={classes.progress} />
                  <p style={{float:'left', fontSize: "4vw", marginLeft: '12vw', marginRight: '37vw'}}>{moment(new Date(challenge.debut)).format('DD/MM/YY')}</p><p style={{fontSize: "4vw"}}>{moment(new Date(challenge.fin)).format('DD/MM/YY')}</p>
                </Paper>

                <p className={classes.description}>{challenge.description}</p>

{/* THEMES */}

                {challenge.categories.list.map((category) => {
                  return(
                    category.id === categoryId &&
                    <Paper className={classes.root1} elevation={1} key={category.id}>
                      <Badge classes={{badge: classes.badge3}} className={classes.margin2} badgeContent={0} color="primary"></Badge>
                      <Badge classes={{badge: classes.badge4}} className={classes.margin3} badgeContent={0} color="secondary"></Badge>
                      <ListItem>
                        <Avatar>
                          <ImageIcon />
                        </Avatar>
                        <ListItemText primary={category.name} />
                      </ListItem>
                    </Paper>
                  )
                })}

{/* IDEAS */}

                <Paper className={classes.root2} elevation={1}>
                  <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={9} color="primary"></Badge>
                  <Badge classes={{badge: classes.badge1}} className={classes.margin1} badgeContent={75} color="secondary"></Badge>
                  <ListItem>
                    <Avatar>
                      <ImageIcon />
                    </Avatar>
                    <ListItemText primary="S'assurer d'avoir le poste 5S complet" secondary="Equipement" />
                  </ListItem>
                </Paper>

                <Paper className={classes.root2} elevation={1}>
                  <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={5} color="primary"></Badge>
                  <Badge classes={{badge: classes.badge1}} className={classes.margin1} badgeContent={35} color="secondary"></Badge>
                  <ListItem>
                    <Avatar>
                      <ImageIcon />
                    </Avatar>      
                    <ListItemText primary="Nettoyer la valve d'embouteillage" secondary="Sécurité" />
                  </ListItem>
                </Paper>

                <Paper className={classes.root2} elevation={1}>
                  <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={4} color="primary"></Badge>
                  <Badge classes={{badge: classes.badge1}} className={classes.margin1} badgeContent={65} color="secondary"></Badge>
                  <ListItem>
                    <Avatar>
                      <ImageIcon />
                    </Avatar>              
                    <ListItemText primary="Valider la complétude dossier fabrication" secondary="OF" />
                  </ListItem>
                </Paper>

                <Paper className={classes.root2} elevation={1}>
                  <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={3} color="primary"></Badge>
                  <Badge classes={{badge: classes.badge1}} className={classes.margin1} badgeContent={85} color="secondary"></Badge>
                  <ListItem>
                    <Avatar>
                      <ImageIcon />
                    </Avatar>  
                    <ListItemText primary="Contresigner le rapport équipe nuit" secondary="Informations" />
                  </ListItem>
                </Paper>

                {challenge.ideas.map((idea) => {
                  return(
                    <NavLink to={`/11/${idUrl}/${categoryId}/${idea.id}`}>
                      <Paper className={classes.root2} elevation={1} key={idea.id}>
                        <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={0} color="primary"></Badge>
                        <Badge classes={{badge: classes.badge1}} className={classes.margin1} badgeContent={0} color="secondary"></Badge>
                        <ListItem>
                          <Avatar>
                            <ImageIcon />
                          </Avatar>
                          <ListItemText primary={idea.nom} />
                        </ListItem>
                      </Paper>
                    </NavLink>
                  )
                })}

              </div>

            </div>
          )
        })}

      </Grid>
    )
  }
}

ChallengeThemeIdeas.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  ...state
})

export default connect(mapStateToProps) (withStyles(styles)(ChallengeThemeIdeas))