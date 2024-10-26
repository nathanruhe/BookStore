import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Heading from "../components/Heading/Heading";

// FORMULARIO REACT-HOOK-FORM

type FormValues = {
  name: string;
  last_name: string;
  email: string;
  photo: string;
  password: string;
  repeatPassword: string;
}

function Register() {

  const { register, handleSubmit, formState, watch, reset } = useForm<FormValues>();

  // EJEMPLO USANDO AXIOS
  async function onSubmit(data: FormValues) {
    try {
      const response = await axios.post("http://localhost:3000/register", data);

      if (response.data.error) {
        console.log("Error Registro", response.data);
        toast.error(response.data.mensaje);
      } else {
        console.log("Usuario Registrado", response.data);
        toast.success("Usuario Registrado");
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
          <Heading level="h1">Register</Heading>
        </div>

        <div className="flex-grow flex items-center justify-center">

          <div className="bg-gradient-to-br from-red-200 to-orange-200 shadow-xl rounded-xl flex flex-col gap-6 items-center justify-center py-8 px-10">

            <p>¡Regístrate para guardar tus libros!</p>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">

              <div className="flex flex-col">
                <input className="text-center rounded-md" type="text" placeholder="Nombre" {...register('name', {
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
                  {formState.errors.name && (<span className="text-red-500 text-xs pl-2">{formState.errors.name.message}</span>)}
                </div>
              </div>

              <div className="flex flex-col">
                <input className="text-center rounded-md" type="text" placeholder="Apellidos" {...register('last_name', {
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
                  {formState.errors.last_name && (<span className="text-red-500 text-xs pl-2">{formState.errors.last_name.message}</span>)}
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
                <input className="text-center rounded-md" type="text" placeholder="Foto" {...register('photo', {
                  required: {
                    value: true,
                    message: 'Foto requerida'
                  },
                })} />
                <div className="min-h-[25px]">
                  {formState.errors.photo && (<span className="text-red-500 text-xs pl-2">{formState.errors.photo.message}</span>)}
                </div>
              </div>

              <div className="flex flex-col">
                <input className="text-center rounded-md" type="password" placeholder="Contraseña" {...register('password', {
                  required: {
                    value: true,
                    message: 'Contraseña requerida'
                  },
                  minLength: {
                    value: 6,
                    message: 'Mínimo 6 caracteres'
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d)(?=.*[.!@#$%^&*])[A-Za-z\d.!@#$%^&*]{6,}$/,
                    message: 'Requiere número, mayúscula y símbolo'
                  },
                })} />
                <div className="min-h-[25px]">
                  {formState.errors.password && (<span className="text-red-500 text-xs pl-2">{formState.errors.password.message}</span>)}
                </div>
              </div>

              <div className="flex flex-col">
                <input className="text-center rounded-md" type="password" placeholder="Repite Contraseña" {...register('repeatPassword', {
                  required: {
                    value: true,
                    message: 'Repetición requerida'
                  },
                  validate: (repeatPasswordValue) => {
                    if (watch('password') !== repeatPasswordValue) {
                      return 'Las contraseñas no coinciden'
                    }
                  }
                })} />
                <div className="min-h-[25px]">
                  {formState.errors.repeatPassword && (<span className="text-red-500 text-xs pl-2">{formState.errors.repeatPassword.message}</span>)}
                </div>
              </div>

              <button className={`py-2 mt-2 w-full text-white rounded-md ${formState.isValid ? 'bg-orange-400' : 'bg-gray-300'}`}>Registrarme</button>

            </form>
          </div>

        </div>

      </div>
    </>
  );
}

export default Register;