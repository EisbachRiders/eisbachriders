import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import Sun from "../../assets/icons/sun-4.svg"

const useStyles = makeStyles(theme => ({
  img: {
    width: 42,
    height: 42,
    marginRight: 10,
  },
}))

function WeatherCode(code) {
  const classes = useStyles()
  let weatherCode = null
  switch (code) {
    //   case "freezing_rain_heavy":
    //     case "freezing_rain":
    //         case 'freezing_rain_light':
    //             case 'freezing_drizzle':
    //             case 'ice_pellets_heavy':
    //             case 'ice_pellets':
    //             case 'ice_pellets_light':
    //     recommendation = (
    //       <img src={SnowRain} alt="long wetsuit" className={classes.img} />
    //     )
    //     break
    //     case 'snow_heavy':
    //         case 'snow':
    //             case 'snow_light':
    //                 case 'flurries':
    //     recommendation = (
    //       <img src={Snow} alt="long wetsuit" className={classes.img} />
    //     )
    //     break
    //     case 'tstorm':
    //     recommendation = (
    //       <img src={ThunderStorm} alt="long wetsuit" className={classes.img} />
    //     )
    //     break
    //   case 'rain_heavy':
    //     case 'rain':
    //         case 'rain_light':
    //             case 'drizzle':
    //     recommendation = (
    //       <img src={Rain} alt="long wetsuit" className={classes.img} />
    //     )
    //     break
    //     case 'rain_light':
    //             case 'drizzle':
    //     recommendation = (
    //       <img src={RainLight} alt="long wetsuit" className={classes.img} />
    //     )
    //     break
    //     case 'fog':
    //         case 'fog_light':
    //     recommendation = (
    //       <img src={Fog} alt="long wetsuit" className={classes.img} />
    //     )
    //     break
    //     case 'cloudy':
    //         case 'mostly_cloudy':
    //     recommendation = (
    //       <img src={Cloudy} alt="long wetsuit" className={classes.img} />
    //     )
    //     break
    //     case 'partly_cloudy':
    //         case 'mostly_clear':
    //     recommendation = (
    //       <img src={PartlyCloudy} alt="long wetsuit" className={classes.img} />
    //     )
    //     break
    case "clear":
      weatherCode = <img src={Sun} alt="long wetsuit" className={classes.img} />
      break
    default:
      weatherCode = <img src={Sun} alt="long wetsuit" className={classes.img} />
  }

  return weatherCode
}

export default WeatherCode
