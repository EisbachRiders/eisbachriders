import React, { useState, useEffect } from "react"
import clsx from "clsx"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Container from "../ui/Container"
import {
  VictoryChart,
  VictoryGroup,
  VictoryArea,
  VictoryAxis,
  VictoryLabel,
} from "victory"
import WetsuitLongIcon from "../../assets/icons/WetsuitLong"
import WbSunnyIcon from "@material-ui/icons/WbSunny"

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "60px 0",
  },
  chartContainer: {
    flexBasis: "55%",
  },
  forecastContainer: {
    flexBasis: "20%",
  },
  forecastInnerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  calendarItem: {
    borderRadius: 4,
    border: `1px solid rgba(0,0,0,.3)`,
  },
  calendarDate: {
    fontWeight: 700,
    width: "fit-content",
    background: theme.color.white,
    paddingLeft: 2,
    paddingRight: 2,
    marginLeft: 15,
    marginTop: -12,
  },
  chartContentContainer: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 15%",
    marginBottom: -30,
    marginTop: 30,
  },
  chartTempContainerSmall: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  chartTempContainer: {
    display: "flex",
    alignItems: "center",
  },
  img: {
    height: 80,
    width: 60,
    marginRight: 15,
  },
  imgLg: {
    height: 200,
    width: 150,
  },
  weather: {
    fontSize: 52,
    margin: 0,
  },
  weatherDetail: {
    textTransform: "capitalize",
  },
  lowercase: {
    textTransform: "lowercase",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    height: 32,
  },
}))

function EisbachForecast() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [loadError, setLoadError] = useState(false)
  const classes = useStyles()
  const { t, i18n } = useTranslation()

  useEffect(() => {
    setLoading(true)
    const fetchData = () => {
      fetch(`http://api.eisbach-riders.com/api.php/records/TempApp/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            setData(response.records)
            setLoadError(false)
          } else {
            setLoadError(true)
          }
        })
        .catch((error) => {
          console.log(error)
          setLoadError(true)
        })
      setLoading(false)
    }
    fetchData()
  }, [])

  console.log(data)

  let runoff = [25.3, 24.2, 26.7]
  let waterLevel = [144, 145, 146]

  let waterTempData = [
    { x: "0:00", y: 9 },
    { x: "2:00", y: 9 },
    { x: "4:00", y: 9.5 },
    { x: "6:00", y: 9.5 },
    { x: "8:00", y: 10 },
    { x: "10:00", y: 10.6 },
    { x: "12:00", y: 10.7 },
    { x: "14:00", y: 10.7 },
    { x: "16:00", y: 11 },
    { x: "18:00", y: 11 },
    { x: "20:00", y: 10 },
    { x: "22:00", y: 10 },
    { x: "24:00", y: 10 },
  ]
  let airTempData = [
    { x: "0:00", y: 44 },
    { x: "2:00", y: 44 },
    { x: "4:00", y: 45 },
    { x: "6:00", y: 46 },
    { x: "8:00", y: 50 },
    { x: "10:00", y: 50 },
    { x: "12:00", y: 52 },
    { x: "14:00", y: 55 },
    { x: "16:00", y: 57 },
    { x: "18:00", y: 56 },
    { x: "20:00", y: 50 },
    { x: "22:00", y: 47 },
    { x: "24:00", y: 44 },
  ]
  const maxWaterTemp = Math.max(
    ...waterTempData.map(function (o) {
      return o.y
    })
  )
  const baseline = airTempData[0].y - maxWaterTemp - 6
  let formattedAirTempData = []
  airTempData.forEach((elem) => {
    formattedAirTempData.push({ x: elem.x, y: elem.y - baseline })
  })

  return (
    <Container
      justifyContent="spaceBetween"
      flexWrap="nowrap"
      className={classes.container}
    >
      <div className={clsx(classes.chartContainer, classes.calendarItem)}>
        <p className={classes.calendarDate}>{t("common.today")}</p>
        <div>
          <div className={classes.chartContentContainer}>
            <div className={classes.chartTempContainer}>
              <WetsuitLongIcon
                alt="wetsuit recommendation"
                className={classes.img}
              />
              <p className={classes.weather}>{waterTempData[0].y}&#176;C</p>
            </div>
            <div>
              <p className={classes.weatherDetail}>
                {`${t("eisbach.runoff")}: ${runoff[0]} `}
                <span className={classes.lowercase}>
                  m<sup>3</sup>/s
                </span>
              </p>
              <p className={classes.weatherDetail}>
                {`${t("eisbach.waterLevel")}: ${waterLevel[0]}cm`}
              </p>
            </div>
          </div>
          <VictoryChart height={200}>
            <VictoryAxis
              tickCount={8}
              style={{
                tickLabels: { fontSize: 6, fontFamily: "Roboto" },
              }}
              axisComponent={<div />}
            />
            <VictoryLabel />
            <VictoryGroup
              style={{
                data: { strokeWidth: 3, fillOpacity: 0.4 },
              }}
            >
              <VictoryArea
                animate={{
                  duration: 2000,
                  onLoad: { duration: 1000 },
                }}
                style={{
                  data: {
                    fill: "transparent",
                    stroke: "yellow",
                    strokeWidth: 1,
                  },
                  labels: {
                    fontSize: 6,
                    fill: ({ data, index }) =>
                      index === "0" ? "#000000" : "#838588",
                  },
                }}
                labels={({ data, index }) => airTempData[index].y}
                labelComponent={<VictoryLabel renderInPortal dy={2} />}
                data={formattedAirTempData}
              />
              <VictoryArea
                animate={{
                  duration: 2000,
                  onLoad: { duration: 1000 },
                }}
                style={{
                  data: { fill: "#0062f0", stroke: "#0062f0", strokeWidth: 1 },

                  labels: {
                    fontSize: 6,
                    fill: ({ data, index }) =>
                      index === "0" ? "#000000" : "#838588",
                  },
                }}
                labels={({ data, index }) => waterTempData[index].y}
                labelComponent={<VictoryLabel renderInPortal dy={-5} />}
                data={waterTempData}
              />
            </VictoryGroup>
          </VictoryChart>
        </div>
      </div>
      {[1, 2].map((elem) => (
        <div
          className={clsx(classes.forecastContainer, classes.calendarItem)}
          key={`day${elem}`}
        >
          <p className={classes.calendarDate}>
            {elem === 1
              ? t("common.tomorrow")
              : new Intl.DateTimeFormat(
                  i18n.language === "en" ? "en-US" : "de",
                  {
                    weekday: "long",
                    timeZone: "Europe/Berlin",
                  }
                ).format(new Date().setDate(new Date().getDate() + 2))}
          </p>
          <div className={classes.forecastInnerContainer}>
            <WetsuitLongIcon
              alt="wetsuit recommendation"
              className={classes.imgLg}
            />
            <p className={classes.weather}>{waterTempData[elem].y}&#176;C</p>

            <div className={classes.iconContainer}>
              <WbSunnyIcon className={classes.icon} />
              <p>{airTempData[elem].y}&#176;C</p>
            </div>
          </div>
        </div>
      ))}
    </Container>
  )
}

export default EisbachForecast
