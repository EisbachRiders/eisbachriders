import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { PieChart, Pie, Cell } from 'recharts'
import { Typography } from '@material-ui/core'
import theme from '../../theme'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 60,
  },
  title: {
    fontWeight: 'bold',
  },
  chartContainer: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  needle: {
    height: 70,
    zIndex: 2,
    position: 'absolute',
  },
  low: {
    borderLeft: `2px solid ${theme.status.black}`,
    transform: 'rotate(305deg)',
    bottom: -12,
    left: '42.5%',
  },
  med: {
    borderLeft: `2px solid ${theme.status.black}`,
    bottom: 0,
  },
  high: {
    borderLeft: `2px solid ${theme.status.black}`,
    transform: 'rotate(55deg)',
    bottom: -12,
    left: '56.5%',
  },
  legend:{
    width: 165,
    marginTop: 5,
    margin: '0 auto',
    display: 'flex',
    justifyContent: "space-between"
  }
}))

function Chart({ value, max, unit, title }) {
  const { t } = useTranslation()
  const classes = useStyles()

  const data = [
    { name: 'Group A', value: 60 },
    { name: 'Group B', value: 60 },
    { name: 'Group C', value: 60 },
  ]

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
  const colors =
    title === 'Water Temperature'
      ? colors2
      : title === 'Runoff'
      ? colors3
      : colors1
  const percent = value / max
  const needle = percent < 0.66 ? 'high' : percent < 0.33 ? 'low' : 'med'

  return (
    <div className={classes.root}>
      <Typography className={classes.title} align="center">
        {title}
      </Typography>
      <Typography className={classes.title} align="center">{`${value} ${unit}`}</Typography>
      <div className={classes.chartContainer}>
        <PieChart
          width={300}
          height={100}
          margin={{ top: 0, right: 0, bottom: -100, left: 0 }}
        >
          <Pie
            dataKey="value"
            data={data}
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
          >
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={colors[index % colors.length]} />
            ))}
          </Pie>
        </PieChart>
        <div
          className={clsx(classes.needle, {
            [classes[needle]]: needle !== null,
          })}
        />
      </div>
        <div className={classes.legend}>
        <Typography variant="caption">0</Typography>
        <Typography variant="caption">{max}</Typography>
        </div>
    </div>
  )
}

export default Chart
