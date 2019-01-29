import React, { Component } from 'react'
import { VictoryBar } from 'victory'
import { withStyles } from '@material-ui/core/styles';

let num1 = Math.floor(Math.random() * 3)
let num2 = Math.floor(Math.random() * 3)
let num3 = Math.floor(Math.random() * 3)
let num4 = Math.floor(Math.random() * 5)
let num5 = Math.floor(Math.random() * 10)
let num6 = Math.floor(Math.random() * 10)
let num7 = Math.floor(Math.random() * 10)
let num8 = Math.floor(Math.random() * 10)
let num9 = Math.floor(Math.random() * 10)
let num10 = Math.floor(Math.random() * 10)

let score = (num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10) / 6

let sampleData = [num1,num2,num3,num4,num5,num6,num7,num8,num9,num10]

const styles = {
  root: {
    width: "90vw",
    marginLeft: "5vw"
  },
  slider: {
    padding: '2em 0',
  },
  note: {
    display: "flex",
    justifyContent: "space-between",
    margin: "-2em 9vw 0",
    textAlign: "center"
  },
  note1: {
    display: "flex",
    textAlign: "center",
    margin: "0 5vw"
  },
  note2: {
    width: "25vw", 
    borderRight: "1px solid black",
    fontSize: "3vw"
  },
  score: {
    position: "absolute",
    marginTop: "-19.2em",
    fontSize: "6vw",
    padding: "2vw",
    border: "1px solid black",
    borderRadius: "50%",
    background: "#a3a3a3",
    fontWeight: "bold",
    color: "white",
    right: 10
  }
};

class Result extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <VictoryBar
          barWidth={25}
          style={{
            data: { 
              fill: "gray",
              stroke: "black",
              strokeWidth: 1,
              fillOpacity: 0.7,
            }
          }}
          data={sampleData}
        />
        <div className={classes.note}>
          <p>1</p> <p>2</p> <p>3</p> <p>4</p> <p>5</p> <p>6</p> <p>7</p> <p>8</p> <p>9</p> <p>10</p>
        </div>
        <div className={classes.note1}>
          <p className={classes.note2}>Tout à fait<br/> insatisfait</p>
          <p className={classes.note2}>Plutôt <br/>insatisfait</p>
          <p className={classes.note2}>Plutôt <br/>satisfait</p>
          <p className={classes.note2} style={{border: "none"}}>Tout à fait<br/> satisfait</p>
        </div>
        <div className={classes.score}>{score.toFixed(1)}</div>
      </div>
    )
  }
}

export default withStyles(styles)(Result)