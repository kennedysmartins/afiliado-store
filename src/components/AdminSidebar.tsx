"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Search from "@/components/Search"
import { ModeToggle } from "./ModeToggle"
import { MdOutlineSettings, MdOutlineDashboard } from "react-icons/md"
import { FiLogOut, FiPackage, FiUser } from "react-icons/fi"
import { LuPackagePlus } from "react-icons/lu"
import Link from "next/link"
import useStoreInfo from "@/hooks/useStore"
import useAuthInfo from "@/hooks/useAuth"
import { useRouter } from "next/navigation"

function Toggler({
  defaultExpanded = false,
  renderToggle,
  children,
}: {
  defaultExpanded?: boolean
  children: React.ReactNode
  renderToggle: (params: {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
  }) => React.ReactNode
}) {
  const [open, setOpen] = React.useState(defaultExpanded)

  return (
    <React.Fragment>
      {renderToggle({ open, setOpen })}
      <div
        className={`grid ${
          open ? "grid-rows-1" : "grid-rows-0"
        } transition-all duration-200 ease-in-out overflow-hidden`}
      >
        {children}
      </div>
    </React.Fragment>
  )
}

export function AdminSidebar({ className }: { className?: string }) {
  const storeInfo= useStoreInfo()
  const AuthContext = useAuthInfo()
   const router = useRouter()
  const { logout } = AuthContext

  return (
    <div
      className={cn(
        "flex flex-col fixed md:sticky transform transition-transform transition-width duration-400 z-40 h-screen w-60 top-0 p-2 gap-2 border-r flex-shrink-0",
        className
      )}
    >
      <div className="space-y-4 py-4 px-2">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h2 className="text-lg font-semibold tracking-tight">
              {storeInfo.storeName}
            </h2>
          </Link>
          <ModeToggle />
        </div>
        <Search className="lg:w-full" />
        <div className="py-2">
          <h2 className="mb-2 text-lg font-semibold tracking-tight ">Admin</h2>
          <div className="space-y-1">
            <Link href="/admin">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <MdOutlineDashboard className="text-primary" />
                Dashboard
              </Button>
            </Link>

            <Link href="/admin/settings">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <MdOutlineSettings className="text-primary" />
                Configurações
              </Button>
            </Link>
          </div>
        </div>
        <div className="py-2">
          <h2 className="mb-2 text-lg font-semibold tracking-tight">
            Produtos
          </h2>
          <div className="space-y-1">
            <Link href="/admin/products">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <FiPackage className="text-primary" />
                Todos os produtos
              </Button>
            </Link>

            <Link href="/admin/products/create">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <LuPackagePlus className="text-primary" />
                Criar produto
              </Button>
            </Link>
          </div>
        </div>

        <div className="py-2">
          <h2 className="mb-2 text-lg font-semibold tracking-tight">Usuário</h2>
          <div className="space-y-1">
            <Link href="/profile">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <FiUser className="text-primary" />
                Meu Perfil
              </Button>
            </Link>

            <Button
              onClick={() => {
                logout()
                router.push("/auth")
              }}
              variant="ghost"
              className="w-full justify-start gap-2"
            >
              <FiLogOut className="text-primary" />
              Deslogar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
