import { useForm } from "react-hook-form";
import Heading from "../components/Heading/Heading";
import useUserContext from "../hooks/useUserContext";

// FORMULARIO REACT-HOOK-FORM

type FormValues = {
  nombre: string;
  apellidos: string;
  email: string;
  foto: string;
}

function Profile() {

  const { register, handleSubmit, formState, reset } = useForm<FormValues>();
  const { user } = useUserContext();

  console.log(user);

  function onSubmit(data: FormValues) {
    console.log("Usuario Actualizado", data);
    reset();
  }

  return (
    <>
      <div className="min-h-[68vh] flex flex-col items-center">

        <div className="w-full flex justify-center">
          <Heading level="h1">Profile</Heading>
        </div>

        <div className="flex-grow flex items-center justify-center">

          <div className="bg-gradient-to-br from-red-200 to-orange-200 shadow-xl rounded-xl flex flex-col gap-6 items-center justify-center py-8 px-10">

            <p>Actualiza tus datos de perfil</p>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">

              <div className="flex flex-col">
                <input className="text-center rounded-md" type="text" placeholder="Nombre" {...register('nombre', {
                  required: {
                    value: true,
                    message: 'Nombre requerido'
                  },
                  minLength: {
                    value: 3,
                    message: 'Mínimo 3 caracteres'
                  },
                  maxLength: {
                    value: 15,
                    message: 'Máximo 15 caracteres'
                  }
                })} />
                <div className="min-h-[25px]">
                  {formState.errors.nombre && (<span className="text-red-500 text-xs pl-2">{formState.errors.nombre.message}</span>)}
                </div>
              </div>

              <div className="flex flex-col">
                <input className="text-center rounded-md" type="text" placeholder="Apellidos" {...register('apellidos', {
                  required: {
                    value: true,
                    message: 'Apellidos requeridos'
                  },
                  minLength: {
                    value: 3,
                    message: 'Mínimo 3 caracteres'
                  },
                  maxLength: {
                    value: 20,
                    message: 'Máximo 20 caracteres'
                  }
                })} />
                <div className="min-h-[25px]">
                  {formState.errors.apellidos && (<span className="text-red-500 text-xs pl-2">{formState.errors.apellidos.message}</span>)}
                </div>
              </div>

              <div className="flex flex-col">
                <input className="text-center rounded-md" type="email" placeholder="Email" {...register("email", {
                  required: {
                    value: true,
                    message: 'Email requerido'
                  },
                  pattern: {
                    value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Email no válido'
                  },
                })} />
                <div className="min-h-[25px]">
                  {formState.errors.email && (<span className="text-red-500 text-xs pl-2">{formState.errors.email.message}</span>)}
                </div>
              </div>

              <div className="flex flex-col">
                <input className="text-center rounded-md" type="text" placeholder="Foto" {...register('foto', {
                  required: {
                    value: true,
                    message: 'Foto requerida'
                  },
                })} />
                <div className="min-h-[25px]">
                  {formState.errors.foto && (<span className="text-red-500 text-xs pl-2">{formState.errors.foto.message}</span>)}
                </div>
              </div>

              <button className={`py-2 mt-2 w-full text-white rounded-md ${formState.isValid ? 'bg-orange-400' : 'bg-gray-300'}`}>Actualizar perfil</button>

            </form>

          </div>

        </div>

      </div>
    </>
  );
}

export default Profile;