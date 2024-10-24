import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import bookSchema, { FormValues } from "../schemas/validationZod";

// FORMULARIO REACT-HOOK-FORM + ZOD 

function AddBook () {
  // logica

  const { register, handleSubmit, formState, reset } = useForm<FormValues>({
    resolver: zodResolver(bookSchema),
    mode: 'onChange'
  });

  function onSubmit(data: FormValues) {
    console.log("Libro Añadido", data);
    reset();
  }

  // renderizado
  return (
    <>
      <h1 className="mb-10">AddBook</h1>

      <p>Añade un libro a tu lista</p>

      <form onSubmit={handleSubmit(onSubmit)} className="border-2 border-red-200 bg-red-50 flex flex-col m-5 items-center justify-center py-5 px-10">

        <div className="flex flex-col">
          <input className="text-center" type="text" placeholder="Titulo" {...register('titulo')}/>
          <div className="min-h-[25px]">
            {formState.errors.titulo && (<span className="text-red-500 text-xs pl-2">{formState.errors.titulo.message}</span>)}
          </div>
        </div>

        <div className="flex flex-col">
          <input className="text-center" type="text" placeholder="Autor" {...register('autor')}/>
          <div className="min-h-[25px]">
            {formState.errors.autor && (<span className="text-red-500 text-xs pl-2">{formState.errors.autor.message}</span>)}
          </div>
        </div>

        <div className="flex flex-col">
          <input className="text-center" type="text" placeholder="Genero" {...register('genero')}/>
          <div className="min-h-[25px]">
            {formState.errors.genero && (<span className="text-red-500 text-xs pl-2">{formState.errors.genero.message}</span>)}
          </div>
        </div>        

        <div className="flex flex-col">
          <input className="text-center" type="text" placeholder="Foto" {...register('foto')}/>
          <div className="min-h-[25px]">
            {formState.errors.foto && (<span className="text-red-500 text-xs pl-2">{formState.errors.foto.message}</span>)}
          </div>
        </div>  

        <div className="flex flex-col">
          <input className="text-center" type="number" placeholder="Precio" {...register('precio')}/>
          <div className="min-h-[25px]">
            {formState.errors.precio && (<span className="text-red-500 text-xs pl-2">{formState.errors.precio.message}</span>)}
          </div>
        </div> 

        <button className={`py-1 px-3 ${formState.isValid ? 'bg-blue-300' : 'bg-blue-50'}`}>Añadir Libro</button>

      </form>
    </>
  );
}

export default AddBook;