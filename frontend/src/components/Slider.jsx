import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    width: 190,
    marginLeft: "22%"
  },
  slider: {
    padding: '2em 0',
  },
  note: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 -3vw 0 -1vw",
    textAlign: "center"
  },
  note1: {
    display: "flex",
    textAlign: "center",
    margin: "0 -7vw"
  },
  note2: {
    width: "25vw", 
    borderRight: "1px solid black",
    fontSize: "3vw"
  }
};

class StepSlider extends React.Component {
  state = {
    value: 5,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Slider
          classes={{ container: classes.slider }}
          value={value}
          min={0}
          max={10}
          step={1}
          onChange={this.handleChange}
        />
        <div className={classes.note}>
          <p>0</p> <p>1</p> <p>2</p> <p>3</p> <p>4</p> <p>5</p> <p>6</p> <p>7</p> <p>8</p> <p>9</p> <p>10</p>
        </div>
        <div className={classes.note1}>
          <p className={classes.note2}>Tout à fait<br/> insatisfait</p>
          <p className={classes.note2}>Plutôt <br/>insatisfait</p>
          <p className={classes.note2}>Plutôt <br/>satisfait</p>
          <p className={classes.note2} style={{border: "none"}}>Tout à fait<br/> satisfait</p>
        </div>
      </div>
    );
  }
}

StepSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StepSlider);