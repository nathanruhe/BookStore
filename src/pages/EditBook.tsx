import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import bookSchema, { FormValues } from "../schemas/validationZod";
import Heading from "../components/Heading/Heading";

// FORMULARIO REACT-HOOK-FORM + ZOD 

function EditBook() {

  const { register, handleSubmit, formState, reset } = useForm<FormValues>({
    resolver: zodResolver(bookSchema),
    mode: 'onChange'
  });

  function onSubmit(data: FormValues) {
    console.log("Libro Actualizado", data);
    reset();
  }

  return (
    <>
      <div className="min-h-[68vh] flex flex-col items-center">

        <div className="w-full flex justify-center">
          <Heading level="h1">EditBook</Heading>
        </div>

        <div className="flex-grow flex items-center justify-center">

          <div className="bg-gradient-to-br from-red-200 to-orange-200 shadow-xl rounded-xl flex flex-col gap-6 items-center justify-center py-8 px-10">

            <p>Actualiza el libro</p>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">

              <div className="flex flex-col">
                <input className="text-center rounded-md" type="text" placeholder="Titulo" {...register('titulo')} />
                <div className="min-h-[25px]">
                  {formState.errors.titulo && (<span className="text-red-500 text-xs pl-2">{formState.errors.titulo.message}</span>)}
                </div>
              </div>

              <div className="flex flex-col">
                <input className="text-center rounded-md" type="text" placeholder="Autor" {...register('autor')} />
                <div className="min-h-[25px]">
                  {formState.errors.autor && (<span className="text-red-500 text-xs pl-2">{formState.errors.autor.message}</span>)}
                </div>
              </div>

              <div className="flex flex-col">
                <input className="text-center rounded-md" type="text" placeholder="Genero" {...register('genero')} />
                <div className="min-h-[25px]">
                  {formState.errors.genero && (<span className="text-red-500 text-xs pl-2">{formState.errors.genero.message}</span>)}
                </div>
              </div>

              <div className="flex flex-col">
                <input className="text-center rounded-md" type="text" placeholder="Foto" {...register('foto')} />
                <div className="min-h-[25px]">
                  {formState.errors.foto && (<span className="text-red-500 text-xs pl-2">{formState.errors.foto.message}</span>)}
                </div>
              </div>

              <div className="flex flex-col">
                <input className="text-center rounded-md" type="number" placeholder="Precio" {...register('precio')} />
                <div className="min-h-[25px]">
                  {formState.errors.precio && (<span className="text-red-500 text-xs pl-2">{formState.errors.precio.message}</span>)}
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