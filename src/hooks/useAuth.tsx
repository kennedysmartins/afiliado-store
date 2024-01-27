"use client"
import * as React from "react"
import { AuthContext } from "@/contexts/AuthContext"

const useAuthInfo = () => {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error("authInfo must be used within a AuthProvider")
  }
  return context
}

export default useAuthInfo
