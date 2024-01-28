"use client"
import { FormEditProfile } from "@/components/FormEditProfile"
import Navbar from "@/components/Navbar"
import useAuthInfo from "@/hooks/useAuth"
import { useRouter } from "next/navigation"


export default function ProfilePage() {
  const { userInfo } = useAuthInfo()
  const router = useRouter()


  if(!userInfo) {
    router.push("/")
    return
  }

  const id: string = userInfo.user.id
  return (
    <>
      <Navbar />
      <main className="w-full container text-2xl gap-2 my-10">
        <h2 className="text-3xl font-bold tracking-tight text-primary">
          Edite seu perfil
        </h2>
        <div className="flex w-full">
          <FormEditProfile id={id} />
        </div>
      </main>
    </>
  )
}
