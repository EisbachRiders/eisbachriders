import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import { AreaChart, XAxis, YAxis, Area } from 'recharts'
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

function TempChart({ temp }) {
  const { t } = useTranslation()
  const classes = useStyles()
  console.log(temp)
  const data = []
  //   temp.forEach(elem => {
  //     data.push({
  //       name: elem.DateTime,
  //       value: elem.Temperature.Value,
  //       rain: elem.PrecipitationProbability,
  //     })
  //   })

  return (
    <div className={classes.root}>
      <Typography className={classes.title} align="center">
        Current Outside Temperature:°C
      </Typography>
      <AreaChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#00d7a2"
          fillOpacity={1}
          fill="#00d7a2"
        />
        <Area
          type="monotone"
          dataKey="rain"
          stroke="#004AB5"
          fillOpacity={1}
          fill="#004AB5"
        />
      </AreaChart>
    </div>
  )
}

export default TempChart
