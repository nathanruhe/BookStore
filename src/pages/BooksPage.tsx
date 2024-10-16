import BooksList from "../components/BookList/BookList";


function BooksPage () {
    // logica
  
  
  
  
    // renderizado
    return (
      <>
      <div className="bg-[var(--bk-color)] flex justify-center items-center flex-wrap gap-[30px]">
          <BooksList />
      </div>
      </>
    );
  }
  
  export default BooksPage;