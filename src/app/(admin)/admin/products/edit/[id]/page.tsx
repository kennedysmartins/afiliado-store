import { FormEditProduct } from "@/components/FormEditProduct"

export default function ProductEditPage({ params }: { params: { id: string } }) {
  const id: string = params.id
  return (
    <>
      <main className="mx-10 w-full text-2xl gap-2 my-10">
        Edite uma promo
        <div className="flex w-full">
          <FormEditProduct id={id} />
        </div>
      </main>
    </>
  )
}
