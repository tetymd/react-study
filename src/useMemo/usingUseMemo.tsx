import { useMemo, useState } from 'react'

export const UsingUseMemo = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  console.log("render App")
  
  const handler = () => {
    setCount(count+1)
  }

  const Counter = useMemo(() => {
    console.log("render Counter")
    return (
      <p>{count2}</p>
    )
  },[count2])

  const handler2 = () => {
    setCount2(count2+1)
  }

  return (
    <div>
      <h3>Using useMemo</h3>
      <p>{count}</p>
      <button onClick={handler}>increment</button>
      <p>------------------------------------------------</p>
      { Counter }
      <button onClick={handler2}>increment</button>
    </div>
  )
}