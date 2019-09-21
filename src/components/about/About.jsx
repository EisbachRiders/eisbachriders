import React from 'react'
import PropTypes from 'prop-types'
import AboutDetail from './AboutDetail'
import Video from './Video'
import Founder from './Founder'

function About({ img }) {
  return (
    <div>
      <Video img={img[3]} />

      <AboutDetail img={img} />

      <Founder img={[img[5], img[4]]} />
    </div>
  )
}

About.propTypes = {
  img: PropTypes.array.isRequired,
}

export default About
