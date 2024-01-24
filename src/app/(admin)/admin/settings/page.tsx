import { FormEditSettings } from "@/components/FormEditSettings"

export default function Settings() {
  return (
    <>
      <main className="mx-10 w-full text-2xl gap-2 my-10">
        Configurações
        <div className="flex w-full">
          <FormEditSettings />
        </div>
      </main>
    </>
  )
}
