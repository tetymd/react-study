import { useContext } from "react";
import { AuthStatus } from "./CreateContext";

export const UsingContext = () => {
  const {authStatus, setAuthStatus }: any = useContext(AuthStatus)
  console.log("render C")
  const handler = () => {
    setAuthStatus(!authStatus)
  }
  return (
    <div>
      {
        (authStatus) ? (<p>Authenticated: true</p>) : (<p>Authenticated: false</p>)
      }
      <button onClick={handler}>Status change</button>
    </div>
  )
}