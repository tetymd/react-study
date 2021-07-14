import { NotUsingCallback } from "./notUsingUseCallback";
import { UsingCallback } from "./usingUseCallback";

export default function UseCallback() {
  return (
    <div>
      <UsingCallback/>
      <br/>
      <NotUsingCallback/>
    </div>
  )
}