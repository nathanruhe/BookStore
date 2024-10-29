import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BiSolidMessageRoundedCheck, BiSolidMessageRoundedError } from "react-icons/bi";

import Heading from "../components/Heading/Heading";
import BooksList from "../components/BookList/BookList";
import { Book } from "../components/BookItem/BookItem";
import useUserContext from "../hooks/useUserContext";

function Books() {

  const { user } = useUserContext();
  const [books, setBooks] = useState<Book[]>([])

  // EJEMPLO USANDO FETCH

  // en este caso ponemos la funcion para obtener los libros dentro del useEffect() para evitar el mensaje de advertencia en las dependencias
  useEffect(() => {
  async function getBooks() {

    if (!user || !user.id_user) {
      toast.error("No hay usuario logueado.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/books?id_user=${user.id_user}`);
      console.log(response);

      if (response.status !== 200) {
        throw new Error("Error en la petición")
      }

      const data = await response.json()
      console.log(data);

      setBooks(data);

      // toast.success("Books conseguidos")
      // Toast personalizado
      toast.success(() => (
        <div className="flex items-center gap-4">
          <BiSolidMessageRoundedCheck className="text-green-500 size-7" />
          <span>Books conseguidos</span>
        </div>
      ));

    } catch (error) {
      console.log(error);

      // if (error instanceof Error) toast.error(error.message)
      // Toast personalizado
      if (error instanceof Error) {
        toast.error(() => (
          <div className="flex items-center gap-4">
            <BiSolidMessageRoundedError className="text-red-500 text-2xl" />
            <span>{error.message}</span>
          </div>
        ));
      }
    }
  }

    getBooks();

  }, [user])

  return (
    <>
      <div className="min-h-[68vh] flex flex-col items-center gap-10">

        <div className="w-full flex justify-center">
          <Heading level="h1">Books</Heading>
        </div>

        <div className="flex-grow flex items-center justify-center">
          <div className="bg-[var(--bk-color)] flex justify-center items-center flex-wrap gap-[30px]">
            <div className="flex flex-wrap gap-8 justify-center">
              <BooksList books={books} />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Books;