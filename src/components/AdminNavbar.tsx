import Link from "next/link"
import React from "react"
import { ModeToggle } from "./ModeToggle"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { FiMenu } from "react-icons/fi"

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
import Search from "@/components/Search"

import { LuPackagePlus } from "react-icons/lu"
import { MdOutlineSettings, MdOutlineDashboard } from "react-icons/md"
import { FiPackage } from "react-icons/fi"

const AdminNavbar = ({ className }: { className?: string }) => {
  
  return (
    <div
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
    >
      <header>
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2">
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger>
                  <Button variant="ghost">
                    <FiMenu />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
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
                      <h2 className="mb-2 text-lg font-semibold tracking-tight">
                        Admin
                      </h2>
                      <div className="space-y-1">
                        <Link href="/admin">
                          <Button
                            variant="ghost"
                            className="w-full justify-start gap-2"
                          >
                            <MdOutlineDashboard />
                            Dashboard
                          </Button>
                        </Link>

                        <Link href="/admin/settings">
                          <Button
                            variant="ghost"
                            className="w-full justify-start gap-2"
                          >
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
                          <Button
                            variant="ghost"
                            className="w-full justify-start gap-2"
                          >
                            <FiPackage />
                            Todos os produtos
                          </Button>
                        </Link>

                        <Link href="/admin/products/create">
                          <Button
                            variant="ghost"
                            className="w-full justify-start gap-2"
                          >
                            <LuPackagePlus />
                            Criar produto
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <div className="flex gap-6 md:gap-10">
              <Link href="/admin" className="flex items-center space-x-2">
                <span className="inline-block font-bold">Admin</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="hidden md:flex items-center space-x-1 gap-3 ">
              <ModeToggle />
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}

export default AdminNavbar
