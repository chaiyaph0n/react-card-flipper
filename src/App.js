import React from 'react';
import styled from 'styled-components'

import Flipper from './Flipper'
import './App.scss';

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

function App() {
  return (
    <div className="App">
      <Flipper
        hover
        direction={'left'}
        fontComponent={<Card>front</Card>}
        backComponent={<Card fontColor="white" bg="palevioletred">back</Card>}
      />
      <Flipper
        hover
        direction={'right'}
        fontComponent={<Card>front</Card>}
        backComponent={<Card fontColor="white" bg="palevioletred">back</Card>}
      />
      <Flipper
        hover
        direction={'top'}
        fontComponent={<Card>front</Card>}
        backComponent={<Card fontColor="white" bg="palevioletred">back</Card>}
      />
      <Flipper
        hover
        direction={'down'}
        fontComponent={<Card>front</Card>}
        backComponent={<Card fontColor="white" bg="palevioletred">back</Card>}
      />
    </div>
  );
}

export default App;
