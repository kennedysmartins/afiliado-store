import Link from "next/link"
import React from "react"
import { ModeToggle } from "./ModeToggle"
import { cn } from "@/lib/utils"

const AdminNavbar = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className
      )}
    >
      <header>
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/admin" className="flex items-center space-x-2">
              <span className="inline-block font-bold">Admin</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1 gap-3">
              <ModeToggle />
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}

export default AdminNavbar
