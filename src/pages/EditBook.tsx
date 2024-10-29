import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { useLocation, useNavigate } from "react-router-dom"
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import bookSchema, { FormValues } from "../schemas/validationZod";
import Heading from "../components/Heading/Heading";

// FORMULARIO REACT-HOOK-FORM + ZOD 

function EditBook() {

  const { state: book } = useLocation();
  const navigate = useNavigate();

  const { register, handleSubmit, formState } = useForm<FormValues>({
    resolver: zodResolver(bookSchema),
    mode: 'onChange',
    defaultValues: book
  });

  // EJEMPLO USANDO AXIOS
  async function onSubmit(data: FormValues) {

    try {
      // así sería en el caso de que se pasara por parametros
      // const response = await axios.put(`http://localhost:3000/books/${book.id_book}`, data);

      // así lo ponemos porque en el backend pide que se pase desde el body
      const response = await axios.put(`http://localhost:3000/books`, {...data, id_book: book.id_book});

      if (response.data.error) {
        console.log("Error EditBook", response.data);
        toast.error(response.data.mensaje);
      } else {
        console.log("Libro Actualizado", response.data);
        toast.success("Libro Actualizado");
        navigate('/books');
      }

    } catch (error) {
      console.error(error);

      if (error instanceof AxiosError) toast.error(error.message)
    }
  }

  return (
    <>
      <div className="min-h-[68vh] flex flex-col items-center">

        <div className="w-full flex justify-center">
          <Heading level="h1">EditBook</Heading>
        </div>

        <div className="flex-grow flex items-center justify-center">

          <div className="bg-gradient-to-br from-red-200 to-orange-200 shadow-xl rounded-xl flex flex-col gap-6 items-center justify-center py-8 px-10">

            <p>Actualizar el libro</p>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">

              <div className="flex flex-col">
                <input className="text-center rounded-md" type="text" placeholder="Titulo" {...register('title')} />
                <div className="min-h-[25px]">
                  {formState.errors.title && (<span className="text-red-500 text-xs pl-2">{formState.errors.title.message}</span>)}
                </div>
              </div>

              <div className="flex flex-col">
                <input className="text-center rounded-md" type="text" placeholder="Autor" {...register('author')} />
                <div className="min-h-[25px]">
                  {formState.errors.author && (<span className="text-red-500 text-xs pl-2">{formState.errors.author.message}</span>)}
                </div>
              </div>

              <div className="flex flex-col">
                <input className="text-center rounded-md" type="text" placeholder="Genero" {...register('type')} />
                <div className="min-h-[25px]">
                  {formState.errors.type && (<span className="text-red-500 text-xs pl-2">{formState.errors.type.message}</span>)}
                </div>
              </div>

              <div className="flex flex-col">
                <input className="text-center rounded-md" type="text" placeholder="Foto" {...register('photo')} />
                <div className="min-h-[25px]">
                  {formState.errors.photo && (<span className="text-red-500 text-xs pl-2">{formState.errors.photo.message}</span>)}
                </div>
              </div>

              <div className="flex flex-col">
                <input className="text-center rounded-md" type="text" placeholder="Precio" {...register('price')} />
                <div className="min-h-[25px]">
                  {formState.errors.price && (<span className="text-red-500 text-xs pl-2">{formState.errors.price.message}</span>)}
                </div>
              </div>

              <button className={`py-2 mt-2 w-full text-white rounded-md ${formState.isValid ? 'bg-orange-400' : 'bg-gray-300'}`}>Actualizar Libro</button>

            </form>

          </div>

        </div>

      </div>
    </>
  );
}

export default EditBook;