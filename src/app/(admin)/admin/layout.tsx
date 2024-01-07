import AdminNavbar from "@/components/AdminNavbar"
import { AdminSidebar } from "@/components/AdminSidebar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <AdminNavbar className="lg:hidden block" />
      <div className="flex">
      <AdminSidebar className="hidden lg:block" />
        {children}
        </div>
    </>
  )
}
