"use client"
import { createDefaultStoreConfigs, getAllStoreConfigs } from "@/lib/api"
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
  storeAddress: string | null
  storeContact: string | null
  storeConfig: any | null
}

type StoreContextType = {
  storeInfo: StoreInfo | null
}

const StoreContext = createContext<StoreContextType | undefined>(undefined)

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [storeInfo, setStoreInfo] = useState<StoreInfo | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const loadStore = useCallback(async () => {
    try {
      const info = await getAllStoreConfigs()
      if (!info) {
        // Se não existir configuração, cria a configuração padrão
        await createDefaultStoreConfigs()
        // Obtém novamente as configurações após a criação da padrão
        const updatedInfo = await getAllStoreConfigs()
        if (updatedInfo) {
          setStoreInfo(updatedInfo)
        }
      } else {
        // Configurações existem, definir no estado
        setStoreInfo(info)
      }
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    loadStore()
  }, [])

  if (isLoading) {
    return (
      <>
        <div className="flex justify-center items-center h-dvh">
          Loading
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

export const useStoreInfo = () => {
  const context = useContext(StoreContext)
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider")
  }
  return context.storeInfo!
}
