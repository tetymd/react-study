import { UsingUseMemo } from "./usingUseMemo";
import { NotUsingUseMemo } from "./notUsingUseMemo";

export default function UseMemo() {
  return (
    <div>
      <UsingUseMemo/>
      <br/>
      <NotUsingUseMemo/>
    </div>
  )
}