import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Container from './ui/Container'

const useStyles = makeStyles(theme => ({}))

function About({ img }) {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <div>
      <Container>
        Eisbach Riders is a young local surf brand from Munich and offers
        equipment for surfing. Whether you are in the sea, in the river or on
        the city wave. We, Michael and Robin, are passionate surfers ourselves
        and value quality products at comparable prices. Packed in sustainable
        and environmentally friendly packaging, we will ship as fast as possible
        so that you can jump right back into the water with a smile on your
        face.
      </Container>
      <Container>About</Container>
      <Container>Pics</Container>
    </div>
  )
}

About.propTypes = {
  img: PropTypes.object.isRequired,
}

export default About
