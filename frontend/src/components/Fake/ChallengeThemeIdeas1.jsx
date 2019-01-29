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
import More from '../pictures/plus.png'

const styles = theme => ({
  container: {
    padding: "0 5vw 4em"
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
    background: '#00a308', //green
    color: 'white'
  },
  badge1: {
    background: '#9000ff', // violet
    color: 'white'
  },
  badge2: {
    background: '#fdb920', // yellow
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
    const { classes } = this.props;
    return (
      <Grid>

        <div>

{/* PICTURE */}
          <div className={classes.containerPhoto}>
            <NavLink to="/21">
              <img src={Arrow} alt="Back" className={classes.arrow}/>
            </NavLink>
              <img src="" alt="Logo" className={classes.image}/>
              <img src={More} alt="Add Challenge" className={classes.more}/>
          </div>

          <div className={classes.container}>


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

{/* THEMES */}

            <Paper className={classes.root1} elevation={1}>
              <Badge classes={{badge: classes.badge3}} className={classes.margin2} badgeContent={5} color="primary"></Badge>
              <Badge classes={{badge: classes.badge4}} className={classes.margin3} badgeContent={3} color="secondary"></Badge>
              <ListItem>
                <Avatar>
                  <ImageIcon />
                </Avatar>
                <ListItemText primary="Réactivité" />
              </ListItem>
            </Paper>

            <NavLink to="/24">
              <Paper className={classes.root2} elevation={1}>
                <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={3} color="primary"></Badge>
                <Badge classes={{badge: classes.badge1}} className={classes.margin1} badgeContent={85} color="secondary"></Badge>
                <ListItem>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                  <ListItemText primary="Convenir d'une date de réponse au client" />
                </ListItem>
              </Paper>
            </NavLink>

            <Paper className={classes.root2} elevation={1}>
              <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={1} color="primary"></Badge>
              <Badge classes={{badge: classes.badge1}} className={classes.margin1} badgeContent={34} color="secondary"></Badge>
              <ListItem>
                <Avatar>
                  <ImageIcon />
                </Avatar>
                <ListItemText primary="Décider un point de contact unique" />
              </ListItem>
            </Paper>

            <Paper className={classes.root2} elevation={1}>
              <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={1} color="primary"></Badge>
              <Badge classes={{badge: classes.badge1}} className={classes.margin1} badgeContent={80} color="secondary"></Badge>
              <ListItem>
                <Avatar>
                  <ImageIcon />
                </Avatar>
                <ListItemText primary="Définir une charte 'réactivité'" />
              </ListItem>
            </Paper>

          </div>

        </div>

      </Grid>
    )
  }
}

ChallengeThemeIdeas.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChallengeThemeIdeas)