import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
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
import WetsuitShort from "../../assets/icons/WetsuitShort.jpg"
import WetsuitHood from "../../assets/icons/WetsuitHood.jpg"
import SwimTrunk from "../../assets/icons/SwimTrunk.jpg"
import TempIcon from "./Temperature.js"
import WbSunnyIcon from "@material-ui/icons/WbSunny"
import WaterIcon from "./Water.js"
import WeatherCode from "./WeatherCode"

const useStyles = makeStyles((theme) => ({
  h1: {
    textAlign: "center",
    fontFamily: "secondary",
    textTransform: "capitalize",
    fontSize: 32,
    fontWeight: 500,
    letterSpacing: 3,
    color: "white",
    [theme.breakpoints.up("md")]: {
      fontSize: 72,
    },
  },
  h2: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: 500,
    marginBottom: 0,
    [theme.breakpoints.up("md")]: {
      fontSize: 32,
    },
  },
  background: {
    position: "relative",
    height: 150,
    [theme.breakpoints.up("md")]: {
      height: 300,
    },
  },
  backgroundContainer: {
    position: "absolute",
    width: "100%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  backgroundImg: {
    width: "100%",
    height: 150,
    [theme.breakpoints.up("md")]: {
      height: 300,
    },
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: "60px 0",
  },
  calendarItem: {
    borderRadius: 4,
    border: `1px solid rgba(0,0,0,.3)`,
    height: 400,
  },
  firstItem: {
    flexBasis: "100%",
    [theme.breakpoints.up("md")]: {
      flexBasis: "55%",
    },
  },
  notFirstItem: {
    flexBasis: "100%",
    [theme.breakpoints.up("md")]: {
      flexBasis: "20%",
    },
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
    width: 100,
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

function EisbachForecast() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [loadError, setLoadError] = useState(false)
  const classes = useStyles()
  const { t, i18n } = useTranslation()

  useEffect(() => {
    setLoading(true)
    let proxyUrl = "https://cors-anywhere.herokuapp.com/"
    let targetUrl = "http://temperature.eisbach-riders.com/forecast.json"
    const fetchData = () => {
      fetch(proxyUrl + targetUrl)
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
    fetchData()
  }, [])

  const img = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "street-art.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const time = [0, 1, 3, 5, 7, 9, 11, 13, 15]
    .map((e) => new Date(new Date().getTime() - e * 60 * 60 * 1000).getHours())
    .reverse()

  let recommendation = null
  let thickness = null
  if (data) {
    let waterTemp = data.current.waterTemp[8]
    switch (true) {
      case waterTemp < 7:
        recommendation = (
          <img src={WetsuitHood} alt="long wetsuit" className={classes.img} />
        )
        thickness = 5
        break
      case waterTemp >= 7 && waterTemp < 10:
        recommendation = (
          <img src={WetsuitHood} alt="long wetsuit" className={classes.img} />
        )
        thickness = 5
        break
      case waterTemp >= 10 && waterTemp < 14:
        recommendation = (
          <img src={WetsuitHood} alt="long wetsuit" className={classes.img} />
        )
        thickness = 5
        break
      case waterTemp >= 14 && waterTemp < 16:
        recommendation = (
          <img src={WetsuitLong} alt="long wetsuit" className={classes.img} />
        )
        thickness = 4
        break
      case waterTemp >= 16 && waterTemp < 20:
        recommendation = (
          <img src={WetsuitLong} alt="long wetsuit" className={classes.img} />
        )
        thickness = 3
        break
      case waterTemp >= 20 && waterTemp < 22:
        recommendation = (
          <img src={WetsuitShort} alt="long wetsuit" className={classes.img} />
        )
        break
      case waterTemp >= 22:
        recommendation = (
          <img src={SwimTrunk} alt="long wetsuit" className={classes.img} />
        )
        break
      default:
        recommendation = (
          <img src={WetsuitLong} alt="long wetsuit" className={classes.img} />
        )
    }
  }

  return (
    <>
      <div className={classes.background}>
        <Img
          fluid={img.fileName.childImageSharp.fluid}
          alt="street art"
          placeholderStyle={{ backgroundColor: `blue` }}
          className={classes.backgroundImg}
          imgStyle={{ objectPosition: "center center" }}
        />
        <div className={classes.backgroundContainer}>
          <h1 className={classes.h1}>{t("eisbach.title")}</h1>
        </div>
      </div>

      <div>
        <Container flexDirection="column">
          <h2 className={classes.h2}>{t("eisbach.localConditions")}</h2>
          {loadError && <p>{t("loadError")}</p>}
          {loading && <CircularProgress />}
          {data && (
            <div className={classes.container}>
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
                        {`${t("eisbach.waterLevel")}: ${
                          data.current.waterLevel
                        }cm`}
                      </p>
                    </div>
                    <div className={classes.chartTempContainer}>
                      <div className={classes.recommendation}>
                        {recommendation}
                        {thickness ? `${thickness}mm` : null}
                      </div>
                      <p className={classes.weather}>
                        {(
                          Math.round(data.current.waterTemp[8] * 10) / 10
                        ).toFixed(1)}
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
                            stroke="#F8DA53"
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
                            stroke="#68AAD7"
                            fill="#B9F4F2"
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
                          {(
                            Math.round(data[elem].maxWaterTemp * 10) / 10
                          ).toFixed(1)}
                          &#176;C
                        </p>
                        <p className={classes.weather3}>
                          {(
                            Math.round(data[elem].minWaterTemp * 10) / 10
                          ).toFixed(1)}
                          &#176;C
                        </p>
                      </div>
                    </div>
                    <div className={classes.recommendationContainer}>
                      <div className={classes.recommendation}>
                        <WeatherCode
                          code={data.weatherApiDaily[idx + 1].weatherCode}
                        />
                      </div>
                      <div className={classes.recommendation2}>
                        <p className={classes.weather2}>
                          {(
                            Math.round(
                              data.weatherApiDaily[idx + 1].temp[1].max.value *
                                10
                            ) / 10
                          ).toFixed(1)}
                          &#176;C
                        </p>
                        <p className={classes.weather3}>
                          {(
                            Math.round(
                              data.weatherApiDaily[idx + 1].temp[0].min.value *
                                10
                            ) / 10
                          ).toFixed(1)}
                          &#176;C
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </div>
    </>
  )
}

export default EisbachForecast
