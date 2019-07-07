import { useCallback, useState } from 'react'

function useFlipper(initFlip = false) {
  const [flipped, setFlipped] = useState(initFlip)

  const _onClick = useCallback(
    isFlipped => () => {
      setFlipped(() => isFlipped)
    },
    []
  )

  return [flipped, _onClick]
}

export default useFlipper
