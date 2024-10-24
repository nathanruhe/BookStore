import { useForm } from "react-hook-form";

// FORMULARIO REACT-HOOK-FORM

type FormValues = {
  email: string;
  password: string;
}

function Login() {
  // logica

  const { register, handleSubmit, formState, reset } = useForm<FormValues>();

  function onSubmit(data: FormValues) {
    console.log("Usuario Logueado", data);
    reset();
  }

  // renderizado
  return (
    <>
      <h1 className="mb-10">Log In</h1>

      <p>¡Loguéate en tu cuenta!</p>

      <form onSubmit={handleSubmit(onSubmit)} className="border-2 border-red-200 bg-red-50 flex flex-col m-5 items-center justify-center py-5 px-10">

        <div className="flex flex-col">
          <input className="text-center" type="email" placeholder="Email.." {...register("email", {
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
          <input className="text-center" type="password" placeholder="Password..." {...register('password', {
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
        
        <button className={`py-1 px-3 ${formState.isValid ? 'bg-blue-300' : 'bg-blue-50'}`}>Log In</button>

      </form>
    </>
  );
}

export default Login;