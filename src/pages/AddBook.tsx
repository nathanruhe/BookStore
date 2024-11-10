import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import bookSchema, { FormValues } from "../schemas/validationZod";
import Heading from "../components/Heading/Heading";
import useUserContext from "../hooks/useUserContext";

// FORMULARIO REACT-HOOK-FORM + ZOD 

function AddBook() {

  const { user } = useUserContext();

  const { register, handleSubmit, formState, reset } = useForm<FormValues>({
    resolver: zodResolver(bookSchema),
    mode: 'onChange'
  });

  // EJEMPLO USANDO AXIOS
  async function onSubmit(data: FormValues) {

    if (!user || !user.id_user) {
      toast.error("No hay usuario logueado.");
      return;
    }
    
    try {
      const response = await axios.post("http://localhost:3000/books", {...data, id_user: user.id_user});

      if (response.data.error) {
        console.log("Error AddBook", response.data);
        toast.error(response.data.mensaje);
      } else {
        console.log("Libro Añadido", response.data);
        toast.success("Libro Añadido");
        reset();
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
          <Heading level="h1">AddBook</Heading>
        </div>

        <div className="flex-grow flex items-center justify-center">

        <div className="bg-gradient-to-br from-red-200 to-orange-200 shadow-xl rounded-xl flex flex-col gap-6 items-center justify-center py-8 px-10">

            <p>Añade un libro a tu lista</p>

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

              <button className={`py-2 mt-2 w-full text-white rounded-md ${formState.isValid ? 'bg-orange-400' : 'bg-gray-300'}`}>Añadir Libro</button>

            </form>

          </div>

        </div>

      </div>

    </>
  );
}

export default AddBook;