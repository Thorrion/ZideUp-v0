import React, { Component } from 'react'
import { VictoryChart, VictoryPolarAxis, VictoryTheme, VictoryLine, VictoryLabel } from 'victory'

let num = Math.floor(Math.random() * 6)
let num1 = Math.floor(Math.random() * 6)
let num2 = Math.floor(Math.random() * 6)
let num3 = Math.floor(Math.random() * 6)

let score = ((num + num1 + num2 + num3) * 5)

let sampleData = [num,num1,num2,num3]
let sampleData5 = [5,5,5,5]
let sampleData4 = [4,4,4,4]
let sampleData3 = [3,3,3,3]
let sampleData2 = [2,2,2,2]
let sampleData1 = [1,1,1,1]

export default class Diagram extends Component {
  render() {
    return (
      <div>
        <VictoryChart polar
          width={800}
          height={650}
          domain={{ y: [0, 5]}}
          theme={VictoryTheme.material}
          name="Scoring"
        >
          <VictoryPolarAxis 
            style={{ axis: { stroke: "none" }, tickLabels: {fontSize: 40} }}
            tickFormat={["Coût","Décision", "Durée", "Complexe"]}
            labelPlacement="vertical"
          />
          <VictoryLabel
          />
          <VictoryPolarAxis/>
          
          <VictoryLine
            data={sampleData5}
            style={{
              data: { stroke: "#d8d8d8" },
            }}
          />
          <VictoryLine
            data={sampleData4}
            style={{
              data: { stroke: "#d8d8d8" },
            }}
          />
          <VictoryLine
            data={sampleData3}
            style={{
              data: { stroke: "#d8d8d8" },
            }}
          />
          <VictoryLine
            data={sampleData2}
            style={{
              data: { stroke: "#d8d8d8" },
            }}
          />
          <VictoryLine
            data={sampleData1}
            style={{
              data: { stroke: "#d8d8d8" },
            }}
          />
          <VictoryLine
            data={sampleData}
            style={{
              data: { stroke: "orange", size: 10 },
            }}
          />
        </VictoryChart>
        <b style={{position: "absolute", right: "45.5vw", marginTop: "-5.3em", fontSize: "8vw" }}>{score}</b>
      </div>
    )
  }
}
