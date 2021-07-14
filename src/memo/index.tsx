import { UsingMemo } from './usingMemo'
import { NotUsingMemo } from './notUsingMemo'

export default function Memo() {
  return (
    <div>
      <UsingMemo />
      <br/>
      <NotUsingMemo />
    </div>
  )
}