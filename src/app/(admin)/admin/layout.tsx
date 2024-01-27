"use client"
import { useRouter } from "next/navigation"
import AdminNavbar from "@/components/AdminNavbar"
import { AdminSidebar } from "@/components/AdminSidebar"
import useAuthInfo from "@/hooks/useAuth"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userInfo } = useAuthInfo()
  const router = useRouter()

  if (userInfo?.user?.userType === "CLIENT") {
    //redirect to home page
    router.push("/")

    return
  }

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
