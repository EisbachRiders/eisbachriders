import * as React from "react"
import PropTypes from "prop-types"

const WetsuitShortIcon = ({ className, width, height, fill, viewBox }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    aria-labelledby="title"
    className={className}
  >
    <title id="title_twitter">Wetsuit Short Icon</title>
    <path
      fill="#313052"
      d="M153.325,261.068L163,297h55.333c21-72.5-18.167-99.5-19.5-132c-1.333-32.5,16.084-66,16.084-66
			L247.5,82.5c-2.833-60.5-56.167-61.5-66-66S165,0,165,0h-33c0,0-6.667,12-16.5,16.5s-63.167,5.5-66,66l33,16.5
			c0,0,17.833,33.5,16.5,66s-40.5,59.5-19.5,132h55.333l9.675-35.932C145.896,256.797,151.937,256.797,153.325,261.068z"
    />

    <path
      fill="#252544"
      d="M214.917,99L247.5,82.5c-2.833-60.5-56.167-61.5-66-66S165,0,165,0h-16.5v257.895
			c1.989-0.172,4.079,0.878,4.825,3.173L163,297h55.333c21-72.5-18.167-99.5-19.5-132S214.917,99,214.917,99z"
    />

    <path
      fill="#3D3D60"
      d="M148.5,193.167L148.5,193.167c-14.993,0-27.148-12.155-27.148-27.148V32.457
			c0-14.993,12.155-27.148,27.148-27.148l0,0c14.993,0,27.148,12.155,27.148,27.148v133.562
			C175.648,181.012,163.493,193.167,148.5,193.167z"
    />

    <path
      fill="#2E2E4C"
      d="M148.5,5.309v187.857c14.993,0,27.148-12.155,27.148-27.148V32.457
			C175.648,17.464,163.493,5.31,148.5,5.309z"
    />

    <path
      fill="#6169BC"
      d="M82.5,99c3.892-20.56,15.55-27.303,33-49.5C136.333,23,132,0,132,0s-6.667,12-16.5,16.5
			s-63.167,5.5-66,66L82.5,99z"
    />

    <path
      fill="#4853A0"
      d="M214.5,99c-3.892-20.56-15.55-27.303-33-49.5C160.667,23,165,0,165,0s6.667,12,16.5,16.5
			s63.167,5.5,66,66L214.5,99z"
    />

    <path
      fill="#252544"
      d="M173.25,10.619h-49.5V3.417c0-1.887,1.53-3.417,3.416-3.417h42.667c1.887,0,3.417,1.53,3.417,3.417
			L173.25,10.619L173.25,10.619z"
    />

    <path
      fill="#1D1D3A"
      d="M173.25,3.417c0-1.887-1.53-3.417-3.417-3.417h-22v10.619h25.416V3.417H173.25z"
    />
  </svg>
)

WetsuitShortIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
}

WetsuitShortIcon.defaultProps = {
  width: "32",
  height: "32",
  viewBox: "0 0 294.465 294.465",
  fill: "currentColor",
}

export default WetsuitShortIcon
