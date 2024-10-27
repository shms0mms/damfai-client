import { PurposeForm } from "@/components/books/purpose-form"
import { Modal } from "@/components/modal"
import { bookService } from "@/services/book.service"

type BookModalPageProps = { params: { id: string } }

export default async function BookModalPage({ params }: BookModalPageProps) {
  const book = await bookService.getById(+params.id)

  return (
    <Modal
      title={book.title}
      description={book.desc}
      classNames={{
        content: "px-4 flex flex-col mb-4",
        description: "max-w-lg overflow-hidden truncate",
        header: "px-0"
      }}
    >
      <PurposeForm params={params} />
    </Modal>
  )
}
