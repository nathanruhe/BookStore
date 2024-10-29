// IMPORTACION CSS UTILIZANDO MODULES
// import styles from "./BookItem.module.css"
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios, { AxiosError } from "axios";
import { useState } from "react";

export type Book = {
  id_book: number,
  id_user: number,
  title: string;
  author: string;
  photo: string;
  price: number;
  type: string;
}

function BookItem({ book }: { book: Book }) {

  const [isDeleted, setIsDeleted] = useState(false);
  const navigate = useNavigate();


  function handleEditBook() {
    console.log(`Editando libro "${book.title}" con id: ${book.id_book}`)
    navigate('/editbook', { state: book });
  }

  async function handleDeleteBook() {
    try {
      // así sería en el caso de que se pasara por parametros
      // const response = await axios.delete(`http://localhost:3000/books/${book.id_book}`);

      // así lo ponemos porque en el backend pide que se pase desde el body
      const response = await axios.delete('http://localhost:3000/books', { data: { id_book: book.id_book } });

      toast.success(response.data.mensaje);
      setIsDeleted(true);

    } catch (error) {

      if (error instanceof AxiosError) { toast.error(error.message) }
    }
  }

  if (isDeleted) {
    return null;
  }

  return (
    <>
      <div className="bg-white h-[450px] w-[250px] border shadow-[0_0_10px_1px_#f87171] rounded-lg text-ml">
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
            <p>{book.price}€</p>
            <div className="flex gap-[10px]">
              <button onClick={handleEditBook}><CiEdit className="text-blue-500 size-6" /></button>
              <button onClick={handleDeleteBook}><MdDelete className="text-red-500 size-6" /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookItem;