import React, { useState, useEffect } from "react"
import clsx from "clsx"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import CircularProgress from "@material-ui/core/CircularProgress"
import Container from "../ui/Container"
import {
  ResponsiveContainer,
  AreaChart,
  LineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  LabelList,
} from "recharts"
import WetsuitLongIcon from "../../assets/icons/WetsuitLong"
import TempIcon from "../../assets/icons/temperature"
import WbSunnyIcon from "@material-ui/icons/WbSunny"
import WaterIcon from "../../assets/icons/water"

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "60px 0",
  },
  calendarItem: {
    borderRadius: 4,
    border: `1px solid rgba(0,0,0,.3)`,
    height: 400,
  },
  firstItem: {
    flexBasis: "55%",
  },
  notFirstItem: {
    flexBasis: "20%",
  },
  calendarDate: {
    fontWeight: 700,
    width: "fit-content",
    background: theme.color.white,
    textTransform: "capitalize",
    paddingLeft: 2,
    paddingRight: 2,
    margin: "-12px 0 0 15px",
  },
  innerContainer: {
    marginTop: -8,
    padding: 30,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  spaceAroundContainer: {
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-around",
  },
  chartTempContainer: {
    textAlign: "center",
  },
  chartOuterContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  chartContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
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
    fontSize: 32,
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
    justifyContent: "space-between",
  },
  icon: {
    height: 32,
  },
  label: {
    fontSize: 11,
    fill: "rgb(102, 102, 102)",
  },
  tempIcon: {
    height: 22,
    width: 22,
    fill: "rgb(102, 102, 102, .8)",
    color: "rgb(102, 102, 102, .8)",
  },
  tempIcon2: {
    height: 16,
    width: 16,
    fill: "rgb(102, 102, 102,.8)",
    color: "rgb(102, 102, 102, .8)",
  },
  marginBottom: {
    marginBottom: 45,
  },
}))

let test = {
  today: {
    date: "21.05.2020",
    minWaterTemp: 13.0,
    maxWaterTemp: 15.0,
    maxTemp: 78,
  },
  tomorrow: {
    date: "22.05.2020",
    minWaterTemp: 13.5,
    maxWaterTemp: 15.0,
    maxTemp: 73,
  },
  next: {
    date: "23.05.2020",
    minWaterTemp: 13.0,
    maxWaterTemp: 14.5,
    maxTemp: 65,
  },
  current: {
    temp: [58, 60, 69, 74, 77, 68, 65, 64, 65],
    waterTemp: [15.8, 15.7, 15.4, 15.1, 15.2, 14.9, 14.8, 14.7, 14.7],
    waterLevel: 146,
    runoff: 24.7,
  },
}

function EisbachForecast() {
  const [data, setData] = useState(
    process.env.NODE_ENV === "development" ? test : null
  )
  const [loading, setLoading] = useState(false)
  const [loadError, setLoadError] = useState(false)
  const classes = useStyles()
  const { t, i18n } = useTranslation()

  useEffect(() => {
    setLoading(true)
    const fetchData = () => {
      fetch(`https://silver-theme-277912.ew.r.appspot.com/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            setData(response)
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
    if (process.env.NODE_ENV !== "development") {
      fetchData()
    } else setLoading(false)
  }, [])

  const time = [0, 1, 3, 5, 7, 9, 11, 13, 15]
    .map((e) => new Date(new Date().getTime() - e * 60 * 60 * 1000).getHours())
    .reverse()

  return (
    <Container
      justifyContent="spaceBetween"
      flexWrap="nowrap"
      className={classes.container}
    >
      {loadError && <p>{t("loadError")}</p>}
      {loading && <CircularProgress />}
      {data && (
        <>
          <div className={clsx(classes.firstItem, classes.calendarItem)}>
            <p className={classes.calendarDate}>{t("common.today")}</p>
            <div className={classes.innerContainer}>
              <div className={classes.spaceAroundContainer}>
                <div>
                  <p className={classes.weatherDetail}>
                    {`${t("eisbach.runoff")}: ${data.current.runoff} `}
                    <span className={classes.lowercase}>
                      m<sup>3</sup>/s
                    </span>
                  </p>
                  <p className={classes.weatherDetail}>
                    {`${t("eisbach.waterLevel")}: ${data.current.waterLevel}cm`}
                  </p>
                </div>
                <div className={classes.chartTempContainer}>
                  <WetsuitLongIcon
                    alt="wetsuit recommendation"
                    className={classes.img}
                  />
                  <p className={classes.weather}>
                    {data.current.waterTemp[8]}&#176;C
                  </p>
                </div>
              </div>
              <div className={classes.chartOuterContainer}>
                <div className={classes.chartIconContainer}>
                  <div
                    className={clsx(
                      classes.marginBottom,
                      classes.iconContainer
                    )}
                  >
                    <WbSunnyIcon className={classes.tempIcon2} />
                    <TempIcon className={classes.tempIcon} />
                  </div>
                  <div className={classes.iconContainer}>
                    <WaterIcon className={classes.tempIcon2} />
                    <TempIcon className={classes.tempIcon} />
                  </div>
                </div>
                <div className={classes.chartContainer}>
                  <ResponsiveContainer width="95%" height={75}>
                    <LineChart
                      data={data.current.temp.map((elem) => {
                        return { value: elem }
                      })}
                      margin={{ top: 0, right: 12, left: 12, bottom: 0 }}
                    >
                      <YAxis
                        hide={true}
                        domain={["dataMin -10", "dataMax + 10"]}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#fce566"
                        strokeWidth="2"
                      >
                        <LabelList
                          dataKey="value"
                          position="top"
                          className={classes.label}
                        />
                      </Line>
                    </LineChart>
                  </ResponsiveContainer>
                  <ResponsiveContainer width="95%" height={100}>
                    <AreaChart
                      data={data.current.waterTemp.map((elem, idx) => {
                        return { time: `${time[idx]}:00`, value: elem }
                      })}
                      margin={{ top: 0, right: 12, left: 12, bottom: 0 }}
                    >
                      <YAxis
                        hide={true}
                        domain={["dataMin - 1", "dataMax + 1"]}
                      />
                      <XAxis
                        dataKey="time"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, dx: 40 }}
                      />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#0062f0"
                        fill="#0062f0"
                      >
                        <LabelList
                          dataKey="value"
                          position="top"
                          className={classes.label}
                        />
                      </Area>
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
          {["tomorrow", "next"].map((elem, idx) => (
            <div
              className={clsx(classes.notFirstItem, classes.calendarItem)}
              key={elem}
            >
              <p className={classes.calendarDate}>
                {idx === 0
                  ? t("common.tomorrow")
                  : new Intl.DateTimeFormat(
                      i18n.language === "en" ? "en-US" : "de",
                      {
                        weekday: "long",
                        timeZone: "Europe/Berlin",
                      }
                    ).format(new Date().setDate(new Date().getDate() + 2))}
              </p>
              <div className={classes.innerContainer}>
                <WetsuitLongIcon
                  alt="wetsuit recommendation"
                  className={classes.imgLg}
                />
                <div className={classes.spaceAroundContainer}>
                  <p className={classes.weather}>
                    {data[elem].minWaterTemp}&#176;C
                  </p>
                  <p className={classes.weather}>
                    {data[elem].maxWaterTemp}&#176;C
                  </p>
                </div>
                <div className={classes.iconContainer}>
                  <WbSunnyIcon className={classes.icon} />
                  <p>{data[elem].maxTemp}&#176;C</p>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </Container>
  )
}

export default EisbachForecast
