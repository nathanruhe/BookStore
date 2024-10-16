// IMPORTACION CSS UTILIZANDO MODULES
// import styles from "./BookItem.module.css"
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

type Book = {
  id_book: number,
  id_user: number,
  title: string;
  author: string;
  photo: string;
  price: number;
  type: string;
}

function BookItem ({ book }: { book: Book }) {
  
    // logica
  
    function handleEditBook () {
      console.log("click en EDITAR");
    }

    function handleDeleteBook () {
      console.log("click en ELIMINAR");
    }
  

    // renderizado
    return (
      <>
        <div className="bg-white h-[450px] w-[250px] border shadow-[0_0_10px_black] rounded-lg text-ml">
            <div className="h-[70%]">
                <img src={book.photo} alt={book.title} className="h-full w-full rounded-t-lg" />
            </div>
            <div className="h-[30%] flex flex-col justify-center gap-[15px] p-[10px]">
                <p className="font-[900]">{book.title}</p>
                <div className="flex justify-between items-center">
                    <p>{book.author}</p>
                    <p className="bg-[rgb(116,121,145)] text-white px-[10px] py-[2px] rounded-full">{book.type}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p>{book.price.toFixed(2)}€</p>
                    <div className="flex gap-[10px]">
                        <button onClick={handleEditBook}><CiEdit className="text-blue-500 size-6"/></button>
                        <button onClick={handleDeleteBook}><MdDelete className="text-red-500 size-6"/></button>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  }
  
  export default BookItem;