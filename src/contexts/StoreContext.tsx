"use client"
import { createDefaultStoreConfigs, getAllStoreConfigs } from "@/lib/api"
import { Progress } from "@/components/ui/progress"

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useCallback,
} from "react"

type StoreInfo = {
  id: string
  storeName: string
  storeDescription: string
  storeLogo: string | null
  storeContact: string | null
  storeConfig: any | null
}

type StoreContextType = {
  storeInfo: StoreInfo | null
}

export const StoreContext = createContext<StoreContextType | null>(null)

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [storeInfo, setStoreInfo] = useState<StoreInfo | null>(null)
  const [isLoading, setIsLoading] = useState(0)

  const loadStore = useCallback(async () => {
    try {
      setIsLoading(33)
      setIsLoading(80)


      const infoList = await getAllStoreConfigs()
      setIsLoading(90)

      if (!infoList || infoList.length === 0) {
        // Se não existir configuração, cria a configuração padrão
        await createDefaultStoreConfigs()
        setIsLoading(90)

        // Obtém novamente as configurações após a criação da padrão
        const updatedInfoList = await getAllStoreConfigs()
        if (updatedInfoList && updatedInfoList.length > 0) {
          setStoreInfo(updatedInfoList[0])
        }
      } else {
        setStoreInfo(infoList[0])
        setIsLoading(90)
      }
    } finally {
      setIsLoading(100)
    }
  }, [])

  useEffect(() => {
    loadStore()
  }, [])

  if (isLoading < 100) {
    return (
      <>
        <div className="flex justify-center items-center h-dvh">
          <div className="w-1/4">

          <Progress value={isLoading} />
          </div>
        </div>
      </>
    )
  }

  return (
    <StoreContext.Provider value={{ storeInfo }}>
      {storeInfo && children}
    </StoreContext.Provider>
  )
}
