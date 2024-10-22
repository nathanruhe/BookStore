import BooksList from "../components/BookList/BookList";


function Books () {
    // logica
  
  
  
  
    // renderizado
    return (
      <>
      <div className="bg-[var(--bk-color)] flex justify-center items-center flex-wrap gap-[30px] p-20">
          <BooksList />
      </div>
      </>
    );
  }
  
  export default Books;