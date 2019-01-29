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
import First from './pictures/first.png'
import Second from './pictures/second.png'
import Third from './pictures/third.png'
import Vote from './pictures/group.png'
import Chart from './pictures/pie-chart.png'
import Eye from './pictures/eye.png'
import User from './pictures/user(1).png'

const styles = theme => ({
  container: {
    padding: "0 5vw"
  },
  container1: {
    padding: "0 5vw 3em"
  },
  logo: {
    width: "100vw",
    margin: 'auto',
    backgroundColor: "#0c54a7",
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
  logoIdea: {
    width: "15vw",
    marginLeft: "2vw"
  },
  listItemText:{
    fontSize:'5vw',
  },
  listItemText1:{
    fontSize:'4vw',
    fontWeight: "bold"
  },
  scoring: {
    width: "10vw",
  },
  scoringContainer: {
    textAlign: "center",
    marginBottom: "2em"
  },
  score: {
    fontSize: "5vw",
    marginLeft: "3vw"
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
  }
});

class ChallengeAllIdeas extends Component {
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
                    <p style={{float:'left', fontSize: "4vw", marginLeft: '12vw', marginRight: '39vw'}}>{moment(new Date(challenge.debut)).format('DD/MM/YY')}</p><p style={{fontSize: "4vw"}}>{moment(new Date(challenge.fin)).format('DD/MM/YY')}</p>
                  </Paper>

                  <p className={classes.description}>{challenge.description}</p>

                </div>

{/* IDEAS */}
                
                <div className={classes.container1}>

                  {this.props.challenges.list[0].ideas.map((idea, index) => {
                    return(
                      <NavLink to={`/11/${idUrl}/${categoryId}/${idea.id}`}>
                      <Paper className={classes.root1} elevation={1} key={idea.id}>
                        <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={0} color="primary"></Badge>
                        <Badge classes={{badge: classes.badge1}} className={classes.margin1} badgeContent={0} color="secondary"></Badge>
                        {index < 3 ?
                        <ListItem style={{padding: 0}}>
                            {index === 0 && 
                              <img src={First} alt="First" className={classes.logoIdea}/>
                            }
                            {index === 1 && 
                              <img src={Second} alt="Second" className={classes.logoIdea}/>
                            }
                            {index === 2 && 
                              <img src={Third} alt="Third" className={classes.logoIdea}/>
                            }
                          <ListItemText primary={idea.nom} secondary={idea.categorie} />
                        </ListItem>
                        :
                        <ListItem>
                          <ListItemText primary={idea.nom} secondary={idea.categorie} />
                        </ListItem>
                        }
                      </Paper>
                      </NavLink>
                      )
                  })}

{/* SCORING */}

                  <p className={classes.title}>Scoring</p>

                  <Grid container>
                    <Grid item xs={6} className={classes.scoringContainer}>
                      <img src={Vote} alt="Vote" className={classes.scoring} /> <span className={classes.score}>127</span>
                    </Grid>
                    <Grid item xs={6} className={classes.scoringContainer}>
                      <img src={Eye} alt="Eye" className={classes.scoring} /> <span className={classes.score}>158</span>
                    </Grid>
                  </Grid>
                  
                  <Grid container>
                    <Grid item xs={6} className={classes.scoringContainer}>
                      <img src={Chart} alt="Chart" className={classes.scoring} /> <span className={classes.score}>32%</span>
                    </Grid>
                    <Grid item xs={6} className={classes.scoringContainer}>
                      <img src={User} alt="User" className={classes.scoring} /> <span className={classes.score}>1.25</span>
                    </Grid>
                  </Grid>

                </div>

              </div>
              )
            }
          )
        }

      </Grid>
    )
  }
}

ChallengeAllIdeas.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  ...state
})



export default connect(mapStateToProps) (withStyles(styles)(ChallengeAllIdeas))