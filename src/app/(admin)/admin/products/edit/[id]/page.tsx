import { FormEditProduct } from "@/components/FormEditProduct"

export default function ProductEditPage({ params }: { params: { id: string } }) {
  const id: string = params.id
  return (
    <>
      <main className="mx-10 w-full text-2xl gap-2 my-10">
        <h2 className="text-3xl font-bold tracking-tight">Edite uma promo</h2>
        <div className="flex w-full">
          <FormEditProduct id={id} />
        </div>
      </main>
    </>
  )
}
