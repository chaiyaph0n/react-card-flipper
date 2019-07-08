import { useSpring } from 'react-spring'

function getFlipRotation(direction) {
  switch (direction) {
    case 'top':
      return ['rotateX', 180]
    case 'right':
      return ['rotateY', 180]
    case 'down':
      return ['rotateX', -180]
    case 'left':
      return ['rotateY', -180]
    default :
      return ['', 0]
  }
}

function useSpringFlip(isFlipped = false, direction = 'right', config = { mass: 5, tension: 500, friction: 80 }) {
  const [rotateAxis, rotateDegree] = getFlipRotation(direction)
  
  const { transform, opacity } = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `${rotateAxis}(${isFlipped ? rotateDegree : 0}deg)`,
    config
  })

  const fontWrapperStyle = { opacity: opacity.interpolate(o => 1 - o), transform }
  const backWrapperStyle = { opacity, transform: transform.interpolate(t => `${t} ${rotateAxis}(${rotateDegree}deg)`) }

  return [fontWrapperStyle, backWrapperStyle]
}

export default useSpringFlip
