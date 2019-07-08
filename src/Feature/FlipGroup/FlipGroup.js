import React from 'react'
import styled from 'styled-components'

import Flipper, { FlipperTransition } from '../../Flipper'

const CardBoxShadow = `0 16px 24px 2px rgba(0, 0, 0, 0.14),
0 6px 30px 5px rgba(0, 0, 0, 0.12),
0 8px 10px -7px rgba(0, 0, 0, 0.2)`

const Card = styled.div`
  align-items: center;
  background: ${props => props.bg || '#fff'};
  border-radius: 6px;
  box-shadow: ${CardBoxShadow};
  -webkit-box-shadow: ${CardBoxShadow};
  -moz-box-shadow: ${CardBoxShadow};
  color: ${props => props.fontColor || '#333'};
  display: flex;
  font-size: 24px;
  font-weight: bold;
  height: 100%;
  justify-content: center;
  text-transform: uppercase;
  width: 100%;
`

const FlexCenteringWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction:row;
  justify-content: center;
  align-items: center;
`

const FlipGroupWrapper = styled(FlexCenteringWrapper)`
  & > * {
    margin: 2em;
    height: 296px;
    width: 236px;
  }
`

function FlipGroup() {
  const [flipped, setFlipped] = React.useState(false)
  const FontComponent = React.memo(({ children = 'font' }) => <Card>{children}</Card>)
  const BackComponent = React.memo(({ children = 'back' }) => <Card fontColor="white" bg="palevioletred">{children}</Card>)
  const directionList = ['top', 'right', 'down', 'left']

  return (
    <React.Fragment>
      <FlipGroupWrapper>
        {
          directionList.map((direction, index) => {
            return (
              <Flipper
                key={`flip-${direction}-${index}`}
                hover
                direction={direction}
                fontComponent={<FontComponent />}
                backComponent={<BackComponent />}
              />
            )
          })
        }
      </FlipGroupWrapper>
      <FlipGroupWrapper>
        {
          directionList.map((direction, index) => {
            return (
              <FlipperTransition
                key={`spring-flip-${direction}-${index}`}
                isFlipped={flipped}
                direction={direction}
                onClick={() => setFlipped(!flipped)}
                fontComponent={<FontComponent />}
                backComponent={<BackComponent />}
              />
            )
          })
        }
      </FlipGroupWrapper>
    </React.Fragment>
  )
}

export default FlipGroup
