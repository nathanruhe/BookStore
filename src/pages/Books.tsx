import BooksList from "../components/BookList/BookList";
import Heading from "../components/Heading/Heading";

function Books() {



  return (
    <>
      <div className="min-h-[68vh] flex flex-col items-center gap-10">

        <div className="w-full flex justify-center">
          <Heading level="h1">Books</Heading>
        </div>

        <div className="flex-grow flex items-center justify-center">
          <div className="bg-[var(--bk-color)] flex justify-center items-center flex-wrap gap-[30px]">
            <BooksList />
          </div>
        </div>

      </div>
    </>
  );
}

export default Books;