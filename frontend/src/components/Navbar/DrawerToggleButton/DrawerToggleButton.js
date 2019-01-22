import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: 'auto',
    height: '10vw',
    width: '10vw',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '0',
    boxSizing: 'border-box',
  },
  line: {
    width: '6px',
    height: '6px',
    background: 'white',
    borderRadius: '5px',
  }
});
class drawerToggleButton extends Component {
  render() {
    const { classes } = this.props;
    return (
      <button className={classes.button} onClick={this.props.click}>
        <div className={classes.line}></div>
        <div className={classes.line}></div>
        <div className={classes.line}></div>
      </button>
    )
  }
}

export default withStyles(styles)(drawerToggleButton)