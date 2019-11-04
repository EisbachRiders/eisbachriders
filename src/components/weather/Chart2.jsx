import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { VictoryPie, VictoryLabel } from "victory";

import theme from '../../theme'

const useStyles = makeStyles(theme => ({
  
}))

function Chart2({ value, max,min, unit, title }) {
  const classes = useStyles()

  const colors1 = [theme.status.finLt, theme.status.fin, theme.status.finDk]
  const colors2 = [
    theme.status.blueLt2,
    theme.status.blueLt1,
    theme.status.blue,
  ]
  const colors3 = [
    theme.status.greenLt1,
    theme.status.greenLt2,
    theme.status.green,
  ]
  const percent = [(value-min) / (max-min)*100]

  return (
    <svg viewBox="0 0 400 400" width="20%" height="20%">
    <defs>
      <linearGradient id="myGradient1">
        <stop offset="0%" stopColor={colors2[0]}/>
        <stop offset="50%" stopColor={colors2[1]}/>
        <stop offset="100%" stopColor={colors2[2]}/>
      </linearGradient>
      <linearGradient id="myGradient2">
        <stop offset="0%" stopColor={colors3[0]}/>
        <stop offset="50%" stopColor={colors3[1]}/>
        <stop offset="100%" stopColor={colors3[2]}/>
      </linearGradient>
      <linearGradient id="myGradient3">
        <stop offset="0%" stopColor={colors1[0]}/>
        <stop offset="50%" stopColor={colors1[1]}/>
        <stop offset="100%" stopColor={colors1[2]}/>
      </linearGradient>
    </defs>
    <VictoryPie
      standalone={false}
      width={400}
      height={400}
      data={[{ x: 1, y: percent }, { x: 2, y: 100 - percent }]}
      innerRadius={120}
      labels={() => null}
      style={{
        data: {fill: "url(#myGradient)"}
      }}
      style={{
        data: {
          fill: ({ datum }) => {
            return datum.x === 1 ? title === "Water Temperature"? "url(#myGradient1)": title==="Runoff"?  "url(#myGradient2)": "url(#myGradient3)" : theme.status.greyLt2;
          }
        }
      }}
    />
    <VictoryLabel
      textAnchor="middle"
      verticalAnchor="middle"
      x={200}
      y={175}
      text={title}
      style={{ fontSize: 20 }}
    />
     <VictoryLabel
      textAnchor="middle"
      verticalAnchor="middle"
      x={200}
      y={225}
      text={`${value} ${unit}`}
      style={{ fontSize: 28 }}
    />
  </svg>
  )
}

export default Chart2