import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { Progress } from 'reactstrap'
import ImageIcon from '@material-ui/icons/Image';
import Arrow from '../pictures/left-arrow-(2).png'
import All from '../pictures/list(1).png'
import Vote from '../pictures/group.png'
import Group from '../pictures/users-group.png'
import Chart from '../pictures/pie-chart.png'
import Eye from '../pictures/eye.png'
import Result from './Result1';

const styles = theme => ({
  container: {
    padding: "0 5vw 3em"
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
    margin: "2em 0",
    padding: "2vw"
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
  listItemText:{
    fontSize:'5vw',
  },
  listItemText1:{
    fontSize:'4vw',
    fontWeight: "bold"
  },
  badge: {
    background: '#00a308',
    color: 'white'
  },
  badge2: {
    background: '#fdb920',
    color: 'white'
  }
});


class Challenge extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid>

{/* PICTURE */}

          <div className={classes.containerPhoto}>
            <NavLink to="/4">
              <img src={Arrow} alt="Back" className={classes.arrow}/>
            </NavLink>
              <img src="" alt="Logo" className={classes.image}/>
            <NavLink to="/23">
              <img src={All} alt="All Ideas" className={classes.menu}/>
            </NavLink>
          </div>

          <div style={{padding: "0 5vw"}}>


{/* CHALLENGE CARD */}

            <Paper className={classes.root} elevation={1}>
              <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={41} color="primary"></Badge>
              <Badge classes={{badge: classes.badge2}} className={classes.margin1} badgeContent={18} color="secondary"></Badge>
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

          <Result/>
                
          <div className={classes.container}>

            <p className={classes.title}>Principales catégories proposées</p>


{/* CATEGORIES */}


            <Paper className={classes.root1} elevation={1}>
              <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={15} color="primary"></Badge>
              <Badge classes={{badge: classes.badge2}} className={classes.margin1} badgeContent={6} color="secondary"></Badge>
              <ListItem>
                <Avatar>
                  <ImageIcon />
                </Avatar>
                <ListItemText primary="Call Center" />
              </ListItem>
            </Paper>

            <Paper className={classes.root1} elevation={1}>
              <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={9} color="primary"></Badge>
              <Badge classes={{badge: classes.badge2}} className={classes.margin1} badgeContent={3} color="secondary"></Badge>
              <ListItem>
                <Avatar>
                  <ImageIcon />
                </Avatar>
                <ListItemText primary="CRM" />
              </ListItem>
            </Paper>

            <Paper className={classes.root1} elevation={1}>
              <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={6} color="primary"></Badge>
              <Badge classes={{badge: classes.badge2}} className={classes.margin1} badgeContent={3} color="secondary"></Badge>
              <ListItem>
                <Avatar>
                  <ImageIcon />
                </Avatar>
                <ListItemText primary="Informations client" />
              </ListItem>
            </Paper>

            <NavLink to="/22">
              <Paper className={classes.root1} elevation={1}>
                <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={5} color="primary"></Badge>
                <Badge classes={{badge: classes.badge2}} className={classes.margin1} badgeContent={3} color="secondary"></Badge>
                <ListItem>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                  <ListItemText primary="Réactivité" />
                </ListItem>
              </Paper>
            </NavLink>

            <Paper className={classes.root1} elevation={1}>
              <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={3} color="primary"></Badge>
              <Badge classes={{badge: classes.badge2}} className={classes.margin1} badgeContent={2} color="secondary"></Badge>
              <ListItem>
                <Avatar>
                  <ImageIcon />
                </Avatar>
                <ListItemText primary="Garantie" />
              </ListItem>
            </Paper>

            <Paper className={classes.root1} elevation={1}>
              <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={3} color="primary"></Badge>
              <Badge classes={{badge: classes.badge2}} className={classes.margin1} badgeContent={1} color="secondary"></Badge>
              <ListItem>
                <Avatar>
                  <ImageIcon />
                </Avatar>
                <ListItemText primary="Customisation" />
              </ListItem>
            </Paper>

            <Paper className={classes.root1} elevation={1}>
              <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={1} color="primary"></Badge>
              <Badge classes={{badge: classes.badge2}} className={classes.margin1} badgeContent={1} color="secondary"></Badge>
              <ListItem>
                <Avatar>
                  <ImageIcon />
                </Avatar>
                <ListItemText primary="Autres" />
              </ListItem>
            </Paper>

{/* SCORING */}

            <p className={classes.title}>Scoring</p>

            
            <Grid container>
              <Grid item xs={6} className={classes.scoringContainer}>
                <img src={Vote} alt="Vote" className={classes.scoring} /> <span className={classes.score}>70</span>
              </Grid>
              <Grid item xs={6} className={classes.scoringContainer}>
                <img src={Group} alt="Group" className={classes.scoring} /> <span className={classes.score}>357</span>
              </Grid>
            </Grid>
            
            <Grid container>
              <Grid item xs={6} className={classes.scoringContainer}>
                <img src={Chart} alt="Chart" className={classes.scoring} /> <span className={classes.score}>20%</span>
              </Grid>
              <Grid item xs={6} className={classes.scoringContainer}>
                <img src={Eye} alt="Eye" className={classes.scoring} /> <span className={classes.score}>158</span>
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