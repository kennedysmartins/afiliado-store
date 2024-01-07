"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Search from "@/components/Search"
import { ModeToggle } from "./ModeToggle"
import { MdOutlineSettings, MdOutlineDashboard } from "react-icons/md"
import { FiPackage } from "react-icons/fi"
import { LuPackagePlus } from "react-icons/lu"
import Link from "next/link"

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
            Afiliado Store
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
                Settings
              </Button>
            </Link>
          </div>
        </div>
        <div className="py-2">
          <h2 className="mb-2 text-lg font-semibold tracking-tight">
            Products
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
    </div>
  )
}
