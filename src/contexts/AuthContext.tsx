"use client"
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react"

interface AuthContextType {
  userInfo: any | null
  login: (userData: Record<string, unknown>) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userInfo, setUser] = useState<Record<string, unknown> | null>(null)

  useEffect(() => {
    const getStoredUserInfo = () => {
      if (typeof window !== "undefined") {
        const storedUserInfo = localStorage.getItem("userInfo")
        return storedUserInfo ? JSON.parse(storedUserInfo) : null
      }
      return null
    }

    setUser(getStoredUserInfo())
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (userInfo) {
        localStorage.setItem("userInfo", JSON.stringify(userInfo))
        //set token in cookies
        if (userInfo.token) {
          const options = {
            path: "/",
            maxAge: 60 * 60 * 24 * 365,
            sameSite: "strict",
            secure: true,
            httpOnly: true,
          }
          document.cookie = `token=${userInfo.token};${options.path};Max-Age=${options.maxAge};SameSite=${options.sameSite};Secure=${options.secure}`
        }


        // } else {
        //     localStorage.removeItem('userInfo');
      }
    }
  }, [userInfo])

  const login = (userData: Record<string, unknown>) => {
    setUser(userData)
  }

  const logout = () => {
    localStorage.removeItem("userInfo")
    document.cookie = "token=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT"
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ userInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }
