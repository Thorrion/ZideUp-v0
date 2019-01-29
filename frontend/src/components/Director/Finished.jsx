import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Progress } from 'reactstrap'
import Badge from '@material-ui/core/Badge';


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
});

function Finished(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>

      <Paper className={classes.root} elevation={1}>
        <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={23} color="primary"></Badge>
        <Badge classes={{badge: classes.badge2}} className={classes.margin1} badgeContent={15} color="secondary"></Badge>
        <ListItem>
          <Avatar>
            <ImageIcon />
          </Avatar>
          <ListItemText primary="Améliorer l'audit fournisseur" secondary="Qualité" />
        </ListItem>
        <Progress value="100" color="info" className={classes.progress} />
      </Paper>

      <Paper className={classes.root} elevation={1}>
        <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={35} color="primary"></Badge>
        <Badge classes={{badge: classes.badge2}} className={classes.margin1} badgeContent={18} color="secondary"></Badge>
        <ListItem>
          <Avatar>
            <ImageIcon />
          </Avatar>
          <ListItemText primary="Améliorer les conditions de travail" secondary="Production" />
        </ListItem>
        <Progress value="100" color="success" className={classes.progress} />
      </Paper>

      <Paper className={classes.root} elevation={1}>
        <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={24} color="primary"></Badge>
        <Badge classes={{badge: classes.badge2}} className={classes.margin1} badgeContent={10} color="secondary"></Badge>
        <ListItem>
          <Avatar>
            <ImageIcon />
          </Avatar>
          <ListItemText primary="Diminuer les défauts produit XU-I" secondary="Qualité" />
        </ListItem>
        <Progress value="100" color="warning" className={classes.progress} />
      </Paper>

      <Paper className={classes.root} elevation={1}>
        <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={28} color="primary"></Badge>
        <Badge classes={{badge: classes.badge2}} className={classes.margin1} badgeContent={19} color="secondary"></Badge>
        <ListItem>
          <Avatar>
            <ImageIcon />
          </Avatar>
          <ListItemText primary="Améliorer la sécurité des données" 
          secondary="R&D" />
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