import React from "react"
import PropTypes from "prop-types"

const SwimTrunkIcon = ({ className, width, height, fill, viewBox }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    aria-labelledby="title"
    className={className}
  >
    <title id="title_twitter">Swim Trunk Icon</title>
    <path
      fill={fill}
      d="m467 31.001h-422c-8.284 0-15 6.716-15 15v89.319c-1.736 19.097-28.205 310.26-29.938 329.323-.381 4.197 1.02 8.361 3.862 11.473s6.862 4.885 11.076 4.885h208.305c8.209 0 14.894-6.599 14.999-14.808.005-.449.618-45.502 4.183-93.08 4.067-54.279 9.564-80.467 13.513-92.931 3.945 12.455 9.437 38.613 13.503 92.798 3.57 47.583 4.188 92.762 4.193 93.213.105 8.208 6.79 14.807 14.999 14.807h208.305c8.802 0 15.738-7.562 14.938-16.358-1.732-19.061-28.202-310.225-29.938-329.322v-89.319c0-8.285-6.716-15-15-15zm-13.698 120 7.985 87.832c-25.236-6.663-44.83-28.115-48.198-55.053l-4.097-32.778h44.31zm-393.302-90h392v60h-151v-15c0-8.284-6.716-15-15-15s-15 6.716-15 15v15h-30v-15c0-8.284-6.716-15-15-15s-15 6.716-15 15v15h-151zm-1.302 90h44.31l-4.097 32.778c-3.367 26.938-22.962 48.391-48.198 55.054zm244.675 300c-.522-19.509-1.818-55.543-4.828-91.259-5.452-64.702-13.413-118.741-42.545-118.741-28.003 0-36.619 48.419-42.545 118.741-3.009 35.716-4.305 71.75-4.828 91.259h-177.202l16.456-181.011c41.777-6.108 75.428-39.526 80.799-82.49l4.562-36.499h77.758v45c0 8.284 6.716 15 15 15s15-6.716 15-15v-45h30v45c0 8.284 6.716 15 15 15s15-6.716 15-15v-45h77.758l4.562 36.5c5.371 42.963 39.021 76.382 80.799 82.49l16.456 181.011h-177.202z"
    />
  </svg>
)

SwimTrunkIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
}

SwimTrunkIcon.defaultProps = {
  width: "32",
  height: "32",
  viewBox: "0 0 512 512",
  fill: "currentColor",
}

export default SwimTrunkIcon