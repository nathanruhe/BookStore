import BookItem from "../components/BookItem/BookItem";


function BooksPage () {
    // logica
  
  
  
  
    // renderizado
    return (
      <>
        <div className="bg-[var(--bk-color)] flex justify-center items-center flex-wrap h-[80vh] gap-[30px]">
          <BookItem />
        </div>
      </>
    );
  }
  
  export default BooksPage;