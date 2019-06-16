import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import { RadialBarChart, RadialBar } from 'recharts'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 60,
  },
  title: {
    fontWeight: 'bold',
  },
  value: {
    fontWeight: 'bold',
    marginTop: -170,
    textAlign: 'center',
  },
}))

function Chart({ value, max, unit, title }) {
  const { t } = useTranslation()
  const classes = useStyles()

  const data = [
    {
      name: 'max',
      value: max,
      fill: '#fafafa',
    },
    {
      name: 'current',
      value: value,
      fill: '#00d7a2',
    },
  ]
  return (
    <div className={classes.root}>
      <Typography className={classes.title} align="center">
        {title}
      </Typography>
      <RadialBarChart
        width={350}
        height={300}
        innerRadius="40%"
        outerRadius="80%"
        data={data}
        startAngle={180}
        endAngle={0}
      >
        <RadialBar minAngle={15} background clockWise={true} dataKey="value" />
      </RadialBarChart>
      <Typography className={classes.value}>{`${value} ${unit}`}</Typography>
    </div>
  )
}

export default Chart
