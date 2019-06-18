import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '../ui/Container'
import Chart from './Chart'
import TempChart from './TempChart'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  chartContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  header: {
    marginBottom: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
  subheader: {
    marginBottom: 30,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 30,
  },
  footnote: {
    fontSize: 12,
  },
  footnoteContainer: {
    marginBottom: 30,
    zIndex: 2,
  },
  link: {
    cursor: 'pointer',
    fontSize: 12,
    float: 'right',
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
}))

function Weather() {
  const { t } = useTranslation()
  const classes = useStyles()
  const [isLoading, setLoading] = useState(false)
  const [water, setWater] = useState('')
  const [waterTime, setWaterTime] = useState('')
  const [temp, setTemp] = useState('')
  const [level, setLevel] = useState('')
  const [levelTime, setLevelTime] = useState('')
  const [runoff, setRunoff] = useState('')
  const [runoffTime, setRunoffTime] = useState('')

  async function fetchUrl() {
    const response = await fetch(url)
    const json = await response.json()
    setData(json)
    setLoading(false)
  }

  useEffect(() => {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    const urlWater =
      'https://www.gkd.bayern.de/en/rivers/watertemperature/kelheim/muenchen-himmelreichbruecke-16515005/current-values/table'
    const urlLevel =
      'https://www.gkd.bayern.de/en/rivers/waterlevel/kelheim/muenchen-himmelreichbruecke-16515005/current-values/table'
    const urlRunoff =
      'https://www.gkd.bayern.de/en/rivers/discharge/kelheim/muenchen-himmelreichbruecke-16515005/current-values/table'
    const urlTemp = `api.openweathermap.org/data/2.5/forecast/hourly?q=Munich&APPID=${process.env.OPENWEATHER}&units=metric`
    const fetchData1 = () => {
      setLoading(true)
      fetch(proxyurl + urlWater)
        .then(function(response) {
          return response
        })
        .then(response => response.text())
        .then(contents => {
          setWaterTime(
            contents
              .split('table')[7]
              .split('<td  class="center">')[0]
              .split('<td >')[1]
              .split('</td>')[0]
          ),
            setWater(
              contents
                .split('table')[7]
                .split('<td  class="center">')[1]
                .split('</td>')[0]
            )
          setLoading(false)
        })
        .catch(function(e) {
          console.log(e)
          setLoading(false)
        })
    }
    fetchData1()
    const fetchData2 = () => {
      fetch(proxyurl + urlLevel)
        .then(function(response) {
          return response
        })
        .then(response => response.text())
        .then(contents => {
          setLevelTime(
            contents
              .split('table')[7]
              .split('<td  class="center">')[0]
              .split('<td >')[1]
              .split('</td>')[0]
          ),
            setLevel(
              contents
                .split('table')[7]
                .split('<td  class="center">')[1]
                .split('</td>')[0]
            )
          setLoading(false)
        })
        .catch(function(e) {
          console.log(e)
          setLoading(false)
        })
    }
    fetchData2()
    const fetchData3 = () => {
      fetch(proxyurl + urlRunoff)
        .then(function(response) {
          return response
        })
        .then(response => response.text())
        .then(contents => {
          setRunoffTime(
            contents
              .split('table')[7]
              .split('<td  class="center">')[0]
              .split('<td >')[1]
              .split('</td>')[0]
          ),
            setRunoff(
              contents
                .split('table')[7]
                .split('<td  class="center">')[1]
                .split('</td>')[0]
            )
          setLoading(false)
        })
        .catch(function(e) {
          console.log(e)
          setLoading(false)
        })
    }
    fetchData3()
    const fetchData4 = () => {
      setLoading(true)
      fetch(proxyurl + urlTemp)
        .then(function(response) {
          return response
        })
        .then(response => response.json())
        .then(contents => {
          console.log(contents)
          setTemp(contents), setLoading(false)
        })
        .catch(function(e) {
          console.log(e)
          setLoading(false)
        })
    }
    fetchData4()
  }, [])

  return (
    <div className={classes.root}>
      {isLoading && <CircularProgress />}
      {!isLoading && (
        <>
          <Container className={classes.container}>
            <Typography variant="h1" align="center" className={classes.header}>
              Current Conditions on the Eisbach
            </Typography>
            <Typography align="center" className={classes.subheader}>
              The Eisbach is the famous river surfing spot in Munich which can
              be surfed year around. The German name <em>Eisbach</em> (which can
              be translated to <em>ice creek</em>) acts as a synonym for the
              water temperature that is often ice cold. The water originates in
              the Bavarian Alps and slowly heats up during the summer months on
              its way to Munich. This page will give you a quick overview of the
              current river conditions. Pack the right wetsuit and enjoy your
              surf session!
            </Typography>

            {/* <div className={classes.footnoteContainer}>
              <Typography className={classes.footnote} align="right">
                Taken at: {waterTime}
              </Typography>
              <a
                className={classes.link}
                href="https://www.gkd.bayern.de/en/"
                target="_blank"
              >
                source
              </a>
            </div> */}
          </Container>
          <div className={classes.chartContainer}>
            <Chart value={water} title="Water Temperature" unit="°C" max="25" />
            <Chart value={level} title="Water Level" max="200" unit="cm" />
            <Chart value={runoff} title="Runoff" max="30" unit="m³/s" />
          </div>
        </>
      )}
      {!isLoading && (
        <Container background="grey" className={classes.footnoteContainer}>
          {/* <TempChart temp={temp} /> */}
          <Typography className={classes.footnote} align="right">
            Taken at: {waterTime}
          </Typography>
          <a
            className={classes.link}
            href="https://www.gkd.bayern.de/en/"
            target="_blank"
          >
            source
          </a>
        </Container>
      )}
    </div>
  )
}

export default Weather
