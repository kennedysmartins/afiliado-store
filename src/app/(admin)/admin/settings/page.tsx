import { FormEditSettings } from "@/components/FormEditSettings"

export default function Settings() {
  return (
    <>
      <main className="mx-10 w-full text-2xl gap-2 my-10">
        <h2 className="text-3xl font-bold tracking-tight">Configurações</h2>
        <div className="flex w-full">
          <FormEditSettings />
        </div>
      </main>
    </>
  )
}
