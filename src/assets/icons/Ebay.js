import React from 'react'
import PropTypes from 'prop-types'

const EbayIcon = ({ className, width, height, fill, viewBox }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    aria-labelledby="title"
    className={className}
  >
    <title id="title_ebay">Ebay Icon</title>
    <path
      fill={fill}
      d="M38.8,26.2c-21.1,0-38.8,9-38.8,36c0,21.4,11.8,34.9,39.3,34.9c32.3,0,34.4-21.3,34.4-21.3H58
	c0,0-3.4,11.5-19.7,11.5c-13.3,0-22.9-9-22.9-21.6h59.9v-7.9C75.3,45.4,67.4,26.2,38.8,26.2L38.8,26.2z M38.2,36.3
	c12.7,0,21.3,7.8,21.3,19.4H15.8C15.8,43.4,27.1,36.3,38.2,36.3z"
    />
    <path
      fill={fill}
      d="M76.3,0v83.6C76.3,88.3,76,95,76,95h14.9c0,0,0.5-4.8,0.5-9.2c0,0,7.4,11.5,27.5,11.5c21.1,0,35.5-14.7,35.5-35.7
	c0-19.6-13.2-35.3-35.5-35.3c-20.9,0-27.3,11.3-27.3,11.3V0L76.3,0z M115.1,36.8c14.4,0,23.5,10.7,23.5,24.9
	c0,15.3-10.5,25.4-23.4,25.4c-15.3,0-23.6-12-23.6-25.2C91.6,49.5,99,36.8,115.1,36.8z"
    />
    <path
      fill={fill}
      d="M192.5,26.2c-31.8,0-33.9,17.4-33.9,20.2h15.8c0,0,0.8-10.2,16.9-10.2c10.5,0,18.6,4.8,18.6,14v3.3h-18.6
	c-24.6,0-37.7,7.2-37.7,21.8c0,14.4,12,22.2,28.3,22.2c22.2,0,29.3-12.3,29.3-12.3c0,4.9,0.4,9.7,0.4,9.7h14.1c0,0-0.5-6-0.5-9.8
	V52.3C225.3,30.8,207.9,26.2,192.5,26.2L192.5,26.2z M210,63.3v4.4c0,5.7-3.5,19.9-24.2,19.9c-11.3,0-16.2-5.7-16.2-12.2
	C169.6,63.4,186,63.3,210,63.3L210,63.3z"
    />
    <path
      fill={fill}
      d="M217.8,28.9h17.8l25.6,51.2l25.5-51.2h16.1l-46.5,91.2h-16.9l13.4-25.4L217.8,28.9z"
    />
  </svg>
)

EbayIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
}

EbayIcon.defaultProps = {
  width: '32',
  height: '32',
  viewBox: '0 0 302.8 120.1',
  fill: 'currentColor',
}

export default EbayIcon
