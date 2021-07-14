import React, { useState } from "react";
import { UsingContext } from "./UsingUseContext";

export const AuthStatus = React.createContext({})

export const CreateContext = () => {
  const [authStatus, setAuthStatus] = useState(false)
  const value = {
    authStatus: authStatus,
    setAuthStatus: setAuthStatus
  }
  console.log("render P")
  return (
    <div>
      <AuthStatus.Provider value={value}>
        <UsingContext/>
      </AuthStatus.Provider>
    </div>
  )
}