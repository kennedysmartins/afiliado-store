"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FiLogOut, FiMenu, FiUser } from "react-icons/fi"
import Search from "@/components/Search"
import { LuPackagePlus } from "react-icons/lu"
import { MdOutlineSettings, MdOutlineDashboard } from "react-icons/md"
import { FiPackage } from "react-icons/fi"
import Link from "next/link"
import { ModeToggle } from "./ModeToggle"
import useStoreInfo from "@/hooks/useStore"
import useAuthInfo from "@/hooks/useAuth"
import { useRouter } from "next/navigation"

export function AdminSidebarMobile() {
  const storeInfo = useStoreInfo()
  const AuthContext = useAuthInfo()
  const { logout } = AuthContext
  const router = useRouter()

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon">
          <FiMenu className="text-primary" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
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
            <h2 className="mb-2 text-lg font-semibold tracking-tight">Admin</h2>
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
            <h2 className="mb-2 text-lg font-semibold tracking-tight">
              Usuário
            </h2>
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
      </SheetContent>
    </Sheet>
  )
}
