"use client"
import * as React from "react"
import { StoreContext } from "@/contexts/StoreContext"

const useStoreInfo = () => {
  const context = React.useContext(StoreContext)
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider")
  }
  return context.storeInfo!
}

export default useStoreInfo
