import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Current from './Current';
import Finished from './Finished';

const styles = theme => ({
  root: {
    paddingTop: "6em",
    paddingBottom: "4em",
    padding: 0,
    margin: "-24px"
  },
  title: {
    backgroundColor: "#e8e8e8",
    margin: "0",
    padding: "2vw 5vw"
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

        </div>

    )
  }
}

export default withStyles(styles)(All)