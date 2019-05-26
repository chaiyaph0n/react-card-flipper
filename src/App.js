import React, { useCallback, useState } from 'react';
import classNames from 'classnames'
import './App.scss';

function CardFlipper({direction = 'right', isFlipped, handlerOnClick}) {
  return (
    <div className="card-flipper-wrapper">
      <div className={classNames(
          'card-flipper',
          `flip-${direction}`,
          { flipped: isFlipped })
        }
      >
        <div className="card card-front" onClick={handlerOnClick(true)}>front</div>
        <div className="card card-back" onClick={handlerOnClick(false)}>back</div>
      </div>
    </div>
  )
}

function App() {
  const [flipped, setFlipped] = useState(false)

  const _onClick = useCallback(
    isFlipped => () => {
      setFlipped(() => isFlipped)
    },
    []
  )
  
  return (
    <div className="App">
      <CardFlipper direction={'left'} isFlipped={flipped} handlerOnClick={_onClick} />
      <CardFlipper direction={'right'} isFlipped={flipped} handlerOnClick={_onClick} />
      <CardFlipper direction={'top'} isFlipped={flipped} handlerOnClick={_onClick} />
      <CardFlipper direction={'bottom'} isFlipped={flipped} handlerOnClick={_onClick} />
    </div>
  );
}

export default App;
