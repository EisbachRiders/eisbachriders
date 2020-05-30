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
import WetsuitLong from "../../assets/icons/WetsuitLong.png"
// import WetsuitLongIcon from "../../assets/icons/WetsuitLong"
// import WetsuitShortIcon from "../../assets/icons/WetsuitShort"
// import WetsuitHoodIcon from "../../assets/icons/WetsuitHood"
// import SwimTrunkIcon from "../../assets/icons/SwimTrunk"
import TempIcon from "../../assets/icons/Temperature"
import WbSunnyIcon from "@material-ui/icons/WbSunny"
import WaterIcon from "../../assets/icons/Water"

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
    display: "flex",
    alignItems: "center",
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
  recommendationContainer: {
    display: "flex",
  },
  recommendation: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  recommendation2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  img: {
    width: 100,
    height: 100,
  },
  imgLg: {
    height: 200,
    width: 150,
  },
  weather: {
    fontSize: 42,
    margin: 0,
  },
  weather2: {
    fontSize: 28,
    margin: 0,
  },
  weather3: {
    fontSize: 28,
    margin: 0,
    color: "rgb(102, 102, 102, .5)",
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
  iconContainer2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 32,
  },
  label: {
    fontSize: 11,
    fill: "rgb(102, 102, 102)",
  },
  labelBold: {
    fontSize: 11,
    fontWeight: 700,
    fill: "black",
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
  tempIcon3: {
    height: 24,
    width: 24,
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

  let recommendation = (
    <img src={WetsuitLong} alt="long wetsuit" className={classes.img} />
  )
  let thickness = 4
  // if (data) {
  //   let waterTemp = data.current.waterTemp[8]
  //   switch (true) {
  //     case waterTemp < 7:
  //       recommendation = (
  //         <WetsuitHoodIcon
  //           alt="wetsuit recommendation"
  //           className={classes.img}
  //         />
  //       )
  //       thickness = 5
  //       break
  //     case waterTemp >= 7 && waterTemp < 10:
  //       recommendation = (
  //         <WetsuitHoodIcon
  //           alt="wetsuit recommendation"
  //           className={classes.img}
  //         />
  //       )
  //       thickness = 5
  //       break
  //     case waterTemp >= 10 && waterTemp < 14:
  //       recommendation = (
  //         <WetsuitHoodIcon
  //           alt="wetsuit recommendation"
  //           className={classes.img}
  //         />
  //       )
  //       thickness = 5
  //       break
  //     case waterTemp >= 14 && waterTemp < 16:
  //       recommendation = (
  //         <WetsuitLongIcon
  //           alt="wetsuit recommendation"
  //           className={classes.img}
  //         />
  //       )
  //       thickness = 4
  //       break
  //     case waterTemp >= 16 && waterTemp < 20:
  //       recommendation = (
  //         <WetsuitLongIcon
  //           alt="wetsuit recommendation"
  //           className={classes.img}
  //         />
  //       )
  //       thickness = 3
  //       break
  //     case waterTemp >= 20 && waterTemp < 22:
  //       recommendation = (
  //         <WetsuitShortIcon
  //           alt="wetsuit recommendation"
  //           className={classes.img}
  //         />
  //       )
  //       break
  //     case waterTemp >= 22:
  //       recommendation = (
  //         <SwimTrunkIcon alt="wetsuit recommendation" className={classes.img} />
  //       )
  //       break
  //     default:
  //       recommendation = (
  //         <WetsuitLongIcon
  //           alt="wetsuit recommendation"
  //           className={classes.img}
  //         />
  //       )
  //   }
  // }

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
                  <div className={classes.recommendation}>
                    {recommendation}
                    {thickness ? `${thickness}mm` : null}
                  </div>
                  <p className={classes.weather}>
                    {(Math.round(data.current.waterTemp[8] * 10) / 10).toFixed(
                      1
                    )}
                    &#176;C
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
                      margin={{ top: 0, right: 15, left: 10, bottom: 0 }}
                    >
                      <YAxis
                        hide={true}
                        domain={["dataMin -10", "dataMax + 10"]}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#E6C55E"
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
                      margin={{ top: 0, right: 15, left: 10, bottom: 0 }}
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
                        label={(elem) => (
                          <text
                            x={elem.x - elem.offset}
                            y={elem.y - elem.offset}
                            textAnchor="top"
                            className={clsx(
                              "recharts-text recharts-label",
                              elem.index === 8
                                ? classes.labelBold
                                : classes.label
                            )}
                          >
                            <tspan x={elem.x - elem.offset * 2} dy="0em">
                              {elem.value}
                            </tspan>
                          </text>
                        )}
                      ></Area>
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
                <div className={classes.recommendationContainer}>
                  <div className={classes.recommendation}>
                    {recommendation}
                    {thickness ? `${thickness}mm` : null}
                  </div>
                  <div className={classes.recommendation2}>
                    <p className={classes.weather2}>
                      {(Math.round(data[elem].maxWaterTemp * 10) / 10).toFixed(
                        1
                      )}
                      &#176;C
                    </p>
                    <p className={classes.weather3}>
                      {(Math.round(data[elem].minWaterTemp * 10) / 10).toFixed(
                        1
                      )}
                      &#176;C
                    </p>
                  </div>
                </div>
                {/* <div className={classes.iconContainer2}>
                  <WbSunnyIcon className={classes.tempIcon3} />
                  <TempIcon className={classes.tempIcon3} />
                  <p>{data[elem].maxTemp}</p>
                </div> */}
              </div>
            </div>
          ))}
        </>
      )}
    </Container>
  )
}

export default EisbachForecast
