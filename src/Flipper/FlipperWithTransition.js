import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { animated } from 'react-spring'

import useSpringFlip from './useSpringFlip'

const Flip = styled.div`
  perspective: 1000px;
`
const Wrapper = styled(animated.div)`
  height: 100%;
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
  will-change: transform, opacity;
`

function FlipperTransition({ direction, hover, isFlipped, fontComponent, backComponent, ...props}) {
  const [fontWrapperStyle, backWrapperStyle] = useSpringFlip(isFlipped, direction)

  return (
    <Flip {...props}>
      <Wrapper style={fontWrapperStyle}>{fontComponent}</Wrapper>
      <Wrapper style={backWrapperStyle}>{backComponent}</Wrapper>
    </Flip>
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
