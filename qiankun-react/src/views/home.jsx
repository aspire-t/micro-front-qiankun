import React, { useState } from 'react'
import actions from '../shared/actions'

const Home = () => {
  let [number, setNumber] = useState(0)
  actions.onGlobalStateChange((state, prev) => {
    setNumber(state.number)
  })

  const handleClick = () => {
    setNumber(() => number + 1)
    actions.setGlobalState({
      number: number + 1,
    })
  }

  return (
    <div>
      Hello home
      <p>{number}</p>
      <button onClick={() => handleClick()}>+ 1</button>
    </div>
  )
}

export default Home
