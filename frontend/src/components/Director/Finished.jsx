import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Progress } from 'reactstrap'
import Badge from '@material-ui/core/Badge';
import { NavLink } from 'react-router-dom';
import Commercial from '../pictures/commercial.png'
import Production from '../pictures/production.png'
import Maintenance from '../pictures/maintenance.png'
import Informatique from '../pictures/informatique.png'

const styles = theme => ({
  container: {
    paddingTop: "1em",
    paddingBottom: "4em",
    background: '#f2f2f2',
    padding: "0 5vw"
  },
  root: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: "2em"
  },
  progress: {
    height: "3px",
    width: "60vw",
    marginLeft: "17vw"
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
  badge: {
    background: '#00a308',
    color: 'white'
  },
  badge2: {
    background: '#fdb920',
    color: 'white'
  },
  logo: {
    width: "8vw"
  }
});

function Finished(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>

      <NavLink to="/27">
        <Paper className={classes.root} elevation={1}>
          <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={38} color="primary"></Badge>
          <Badge classes={{badge: classes.badge2}} className={classes.margin1} badgeContent={6} color="secondary"></Badge>
          <ListItem>
            <img src={Commercial} alt="Commercial" className={classes.logo}/>
            <ListItemText primary="Augmenter les ventes sur salon" secondary="Commercial" />
          </ListItem>
          <Progress value="100" color="success" className={classes.progress} />
        </Paper>
      </NavLink>

      <Paper className={classes.root} elevation={1}>
        <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={35} color="primary"></Badge>
        <Badge classes={{badge: classes.badge2}} className={classes.margin1} badgeContent={18} color="secondary"></Badge>
        <ListItem>
          <img src={Production} alt="Production" className={classes.logo}/>
          <ListItemText primary="Augmenter la polyvalence" secondary="Production" />
        </ListItem>
        <Progress value="100" color="info" className={classes.progress} />
      </Paper>

      <Paper className={classes.root} elevation={1}>
        <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={24} color="primary"></Badge>
        <Badge classes={{badge: classes.badge2}} className={classes.margin1} badgeContent={10} color="secondary"></Badge>
        <ListItem>
          <img src={Maintenance} alt="Maintenance" className={classes.logo}/>
          <ListItemText primary="Partage de bonnes pratiques sur" secondary="Maintenance" />
        </ListItem>
        <Progress value="100" color="warning" className={classes.progress} />
      </Paper>

      <Paper className={classes.root} elevation={1}>
        <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={28} color="primary"></Badge>
        <Badge classes={{badge: classes.badge2}} className={classes.margin1} badgeContent={19} color="secondary"></Badge>
        <ListItem>
          <img src={Informatique} alt="Informatique" className={classes.logo}/>
          <ListItemText primary="Réduire les risques réseau" 
          secondary="Informatique" />
        </ListItem>
        <Progress value="100" color="danger" className={classes.progress} />
      </Paper>

    </div>
  );
}

Finished.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Finished);