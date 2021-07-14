import React, { useState } from 'react'

export const NotUsingCallback = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  console.log("render P")

  const handler = () => {
    setCount(count+1)
  }
  const callback = () => {
    setCount2(count2+1)
  }

  return (
    <div>
      <h3>Not Using useCallback</h3>
      <p>{count}</p>
      <button onClick={handler}>increment</button>
      <p>------------------------------------------------</p>
      <Child callback={callback}/>
    </div>
  )
}

const Child = React.memo((props: any) => {
  console.log("render C")
  return (
    <div>
      <button onClick={props.callback}>callback</button>
    </div>
  )
})