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
import { FiMenu } from "react-icons/fi"
import Search from "@/components/Search"
import { LuPackagePlus } from "react-icons/lu"
import { MdOutlineSettings, MdOutlineDashboard } from "react-icons/md"
import { FiPackage } from "react-icons/fi"
import Link from "next/link"
import { ModeToggle } from "./ModeToggle"
import useStoreInfo from "@/hooks/useStore"




export function AdminSidebarMobile() {
  const storeInfo = useStoreInfo()

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon">
          <FiMenu />
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
                  <MdOutlineDashboard />
                  Dashboard
                </Button>
              </Link>

              <Link href="/admin/settings">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <MdOutlineSettings />
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
                  <FiPackage />
                  Todos os produtos
                </Button>
              </Link>

              <Link href="/admin/products/create">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <LuPackagePlus />
                  Criar produto
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
