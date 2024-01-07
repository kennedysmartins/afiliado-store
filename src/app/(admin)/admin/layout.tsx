import AdminNavbar from "@/components/AdminNavbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <AdminNavbar/>
      <div>{children}</div>
    </>
  )
}
