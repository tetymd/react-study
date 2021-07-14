import { useState } from 'react'

export const NotUsingMemo = () => {
  const [count, setCount] = useState(0)
  console.log("render P")
  const handler = () => {
    setCount(count+1)
  }
  return (
    <div>
      <h3>Not  Using React.Memo</h3>
      <p>{count}</p>
      <button onClick={handler}>increment</button>
      <p>------------------------------------------------</p>
      <Child />
    </div>
  )
}

const Child = () => {
  const [count, setCount] = useState(0)
  console.log("render C")
  const handler = () => {
    setCount(count+1)
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={handler}>increment</button>
    </div>
  )
}