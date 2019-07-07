import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

const flipDirection = {
  top: 'rotateX(180deg)',
  right: 'rotateY(180deg)',
  left: 'rotateY(-180deg)',
  down: 'rotateX(-180deg)',
}

const FlipperWrapper = styled.div`
  perspective: 1000px;
`
const FrontWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
`

const BackWrapper = styled(FrontWrapper)``

const Flip = styled.div.attrs(props => ({
  transition: props.transition || 'all 0.6s ease-in-out',
}))`
  position: relative;
  transition: ${props => props.transition};
  transform-style: preserve-3d;
  height: 100%;
  width: 100%;
  cursor: pointer;
  
  ${props => props.hover && css`
    &:hover {
      transform: ${props => flipDirection[props.direction]};
    }
  `}
  
  ${props => props.flipped && css`
    transform: ${props => flipDirection[props.direction]};
  `}
  
  ${BackWrapper} {
    transform: ${props => flipDirection[props.direction]};
  }
`

function Flipper({ direction, hover, isFlipped, fontComponent, backComponent, ...props}) {
  return (
    <FlipperWrapper>
      <Flip direction={direction} flipped={isFlipped} hover={hover} {...props}>
        <FrontWrapper>{fontComponent}</FrontWrapper>
        <BackWrapper>{backComponent}</BackWrapper>
      </Flip>
    </FlipperWrapper>
  )
}

Flipper.propTypes = {
  direction: PropTypes.oneOf(["top", "right", "down", "left"]),
  isFlipped: PropTypes.bool,
  hover: PropTypes.bool,
  fontComponent: PropTypes.node.isRequired,
  backComponent: PropTypes.node.isRequired,
}

Flipper.defaultProps = {
  direction: "right",
  isFlipped: false,
  hover: false,
}

export default Flipper
