import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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
  logo: {
    width: "8vw"
  }
});

function Draft(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>

      <Paper className={classes.root} elevation={1}>
        <ListItem>
          <img src={Informatique} alt="Informatique" className={classes.logo}/>
          <ListItemText primary="Réduire les risques réseau" secondary="Informatique" />
        </ListItem>
      </Paper>

    </div>
  );
}

Draft.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Draft);