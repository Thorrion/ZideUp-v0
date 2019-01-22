import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  backdrop: {
    position: 'fixed',
    width: '100%',
    height: '96em',
    top: '4em',
    left: '0',
    background: 'rgba(0, 0, 0, 0.2)',
    zIndex: '1500',
  }
});

class Backdrop extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.backdrop} onClick={this.props.click}/>
    )
  }
}

export default withStyles(styles)(Backdrop)
