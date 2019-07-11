import React from "react"
import PropTypes from "prop-types"
import { animated } from "react-spring"

import useSpringFlip from "./useSpringFlip"
import './index.scss'

function FlipperTransition({ direction, hover, isFlipped, fontComponent, backComponent, ...props}) {
  const [fontWrapperStyle, backWrapperStyle] = useSpringFlip(isFlipped, direction)

  return (
    <div className="flipper" {...props}>
      <animated.div className="wrapper" style={fontWrapperStyle}>{fontComponent}</animated.div>
      <animated.div className="wrapper" style={backWrapperStyle}>{backComponent}</animated.div>
    </div>
  )
}

FlipperTransition.propTypes = {
  direction: PropTypes.oneOf(["top", "right", "down", "left"]),
  isFlipped: PropTypes.bool,
  hover: PropTypes.bool,
  fontComponent: PropTypes.node.isRequired,
  backComponent: PropTypes.node.isRequired,
}

FlipperTransition.defaultProps = {
  direction: "right",
  isFlipped: false,
  hover: false,
}

export default FlipperTransition
