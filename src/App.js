import React from 'react';
import styled from 'styled-components'

import { FlipGroup } from './Feature'

const FlexCenteringWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction:row;
  justify-content: center;
  align-items: center;
`

const AppWrapper = styled(FlexCenteringWrapper)`
  background-color: #F7F9FE;
  height: 100%;
`

function App() {
  return (
    <AppWrapper>
      <FlipGroup />
    </AppWrapper>
  );
}

export default App;
