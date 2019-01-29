import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Progress } from 'reactstrap'
import Badge from '@material-ui/core/Badge';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

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
  root1: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: "2em",
    boxShadow: "0 0 1em #039ce0",
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

let challenges

class Current extends Component {
  render() {
    const { classes } = this.props;
    if(this.props.challenges){
      challenges = this.props.challenges.list.reverse()
    }
    return (
      <div className={classes.container}>

      {challenges.map((challenge) => {
          return(
            <NavLink to={`/6.5/${challenge.id}`}>
              <Paper className={classes.root1} elevation={1} key={challenge.id}>
                <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={0} color="primary"></Badge>
                <Badge classes={{badge: classes.badge2}} className={classes.margin1} badgeContent={0} color="secondary"></Badge>
                <ListItem>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                  <ListItemText primary={challenge.nom} secondary={challenge.perimetre} />
                </ListItem>
                <Progress value="0" className={classes.progress} />
              </Paper>
            </NavLink>
          )
        })
      }

      <NavLink to="/20">
        <Paper className={classes.root} elevation={1}>
          <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={41} color="primary"></Badge>
          <Badge classes={{badge: classes.badge2}} className={classes.margin1} badgeContent={18} color="secondary"></Badge>
          <ListItem>
            <Avatar>
              <ImageIcon />
            </Avatar>
            <ListItemText primary="Améliorer le service utilisateur" secondary="SAV" />
          </ListItem>
          <Progress value="20" className={classes.progress} />
        </Paper>
      </NavLink>

      <Paper className={classes.root} elevation={1}>
        <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={28} color="primary"></Badge>
        <Badge classes={{badge: classes.badge2}} className={classes.margin1} badgeContent={24} color="secondary"></Badge>
        <ListItem>
          <Avatar>
            <ImageIcon />
          </Avatar>
          <ListItemText primary="Améliorer les conditions de travail" secondary="Production" />
        </ListItem>
        <Progress value="80" className={classes.progress} />
      </Paper>

      <Paper className={classes.root} elevation={1}>
        <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={21} color="primary"></Badge>
        <Badge classes={{badge: classes.badge2}} className={classes.margin1} badgeContent={13} color="secondary"></Badge>
        <ListItem>
          <Avatar>
            <ImageIcon />
          </Avatar>
          <ListItemText primary="Diminuer les défauts produit XU-I" secondary="Qualité" />
        </ListItem>
        <Progress value="65" className={classes.progress} />
      </Paper>

      <Paper className={classes.root} elevation={1}>
        <Badge classes={{badge: classes.badge}} className={classes.margin} badgeContent={8} color="primary"></Badge>
        <Badge classes={{badge: classes.badge2}} className={classes.margin1} badgeContent={9} color="secondary"></Badge>
        <ListItem>
          <Avatar>
            <ImageIcon />
          </Avatar>
          <ListItemText primary="Améliorer la sécurité des données" 
          secondary="R&D" />
        </ListItem>
        <Progress value="35" className={classes.progress} />
      </Paper>

      </div>
    );
  }
}

Current.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  ...state
})

export default connect(mapStateToProps)(withStyles(styles)(Current))