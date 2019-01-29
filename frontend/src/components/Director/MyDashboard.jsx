import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Current from './Current';
import Finished from './Finished';
import Draft from './Draft';
const styles = theme => ({
  root: {
    paddingTop: "0em",
    paddingBottom: "4em",
    padding: 0,
    margin: "-24px"
  },
  title: {
    backgroundColor: "#e8e8e8",
    margin: "0",
    padding: "2vw 5vw"
  },
  challenge: {
    padding: "5vw 0",
    marginLeft: "-3vw"
  },
  side: {
    textAlign: "right",
    margin: "auto",
    color: "gray",
    marginRight: "-3vw",
    fontSize: "3.5vw"
  },
  progress: {
    height: "3px"
  },
  hr: {
    width: "100vw !important",
    margin : "0 -6vw"
  },
});

class All extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>

{/* EN COURS */}

        <p className={classes.title}>En cours</p>

        <Current/>

{/* TERMINES */}

        <p className={classes.title}>Terminés</p>

        <Finished/>

{/* BROUILLON */}

        <p className={classes.title}>Brouillon</p>

        <Draft/>

      </div>

    )
  }
}


const mapStateToProps = (state) => ({
  challenges: state.challenges
})

export default connect(mapStateToProps) ((withStyles(styles))(All))