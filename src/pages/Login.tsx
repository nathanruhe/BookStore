import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Heading from "../components/Heading/Heading";
import useUserContext from "../hooks/useUserContext";

// FORMULARIO REACT-HOOK-FORM

type FormValues = {
  email: string;
  password: string;
}

function Login() {

  const { register, handleSubmit, formState, reset } = useForm<FormValues>();
  const { login } = useUserContext();

  // EJEMPLO USANDO AXIOS
  async function onSubmit(data: FormValues) {
    try {
      const response = await axios.post("http://localhost:3000/login", data);

      if (response.data.error) {
        console.log("Error Login", response.data);
        toast.error(response.data.mensaje);
      } else {
        console.log("Usuario Logueado", response.data);
        toast.success("Usuario Logueado");

        // Guardar el usuario en el contexto
        login(response.data.dataUser)
        
        reset();
      }

    } catch (error) {
      console.error(error);

      if (error instanceof AxiosError) toast.error(error.message)
    }
  }

  return (
    <>
      {/* <Heading className="bg-black py-2 px-4 rounded-2xl" title="Login title"/> */}
      {/* <Heading className="text-blue-300">Login children</Heading> */}

      <div className="min-h-[68vh] flex flex-col items-center">

        <div className="w-full flex justify-center">
          <Heading level="h1">Login</Heading>
        </div>

        <div className="flex-grow flex items-center justify-center">

          <div className="bg-gradient-to-br from-red-200 to-orange-200 shadow-xl rounded-xl flex flex-col gap-6 items-center justify-center py-8 px-10">

            <p>¡Loguéate en tu cuenta!</p>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">

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
                <input className="text-center rounded-md" type="password" placeholder="Password" {...register('password', {
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
                <div className="min-h-[25px] pl-2">
                  {formState.errors.password && (<span className="text-red-500 text-xs">{formState.errors.password.message}</span>)}
                </div>
              </div>

              <button className={`py-2 mt-2 w-full text-white rounded-md ${formState.isValid ? 'bg-orange-400' : 'bg-gray-300'}`}>Log In</button>

            </form>

          </div>

        </div>

      </div>
    </>
  );
}

export default Login;