import BookItem, { Book } from "../BookItem/BookItem";

type BooksListProps = {
  books: Book[];
}

function BooksList ({ books }: BooksListProps) {
  


    return (
      <>
        <div className="flex flex-wrap gap-8 justify-center">
          {books.map((book) => (
            <BookItem key={book.id_book} book={book} />
          ))}
        </div>
      </>
    );
  }
  
  export default BooksList;