import { useForm } from "react-hook-form";

// FORMULARIO REACT-HOOK-FORM

type FormValues = {
  nombre: string;
  apellidos: string;
  email: string;
  foto: string;
  password: string;
  repeatPassword: string;
}

function Register() {
  // logica

  const { register, handleSubmit, formState, watch, reset } = useForm<FormValues>();

  function onSubmit(data: FormValues) {
    console.log("Usuario Registrado", data);
    reset();
  }

  // renderizado
  return (
    <>
      <h1 className="mb-10">Register</h1>

      <p>¡Regístrate para guardar tus libros!</p>

      <form onSubmit={handleSubmit(onSubmit)} className="border-2 border-red-200 bg-red-50 flex flex-col m-5 items-center justify-center py-5 px-10">

        <div className="flex flex-col">
          <input className="text-center" type="text" placeholder="Nombre" {...register('nombre', {
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
          })}/>
          <div className="min-h-[25px]">
            {formState.errors.nombre && (<span className="text-red-500 text-xs pl-2">{formState.errors.nombre.message}</span>)}
          </div>
        </div>

        <div className="flex flex-col">
          <input className="text-center" type="text" placeholder="Apellidos" {...register('apellidos', {
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
          })}/>
          <div className="min-h-[25px]">
            {formState.errors.apellidos && (<span className="text-red-500 text-xs pl-2">{formState.errors.apellidos.message}</span>)}
          </div>
        </div>

        <div className="flex flex-col">
          <input className="text-center" type="email" placeholder="Email" {...register("email", {
            required: {
              value: true,
              message: 'Email requerido'
            },
            pattern: {
              value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
              message: 'Email no válido'
            },
          })}/>
          <div className="min-h-[25px]">
            {formState.errors.email && (<span className="text-red-500 text-xs pl-2">{formState.errors.email.message}</span>)}
          </div>
        </div>

        <div className="flex flex-col">
          <input className="text-center" type="text" placeholder="Foto" {...register('foto', {
            required: {
              value: true,
              message: 'Foto requerida'
            },
          })}/>
          <div className="min-h-[25px]">
            {formState.errors.foto && (<span className="text-red-500 text-xs pl-2">{formState.errors.foto.message}</span>)}
          </div>
        </div>

        <div className="flex flex-col">
          <input className="text-center" type="password" placeholder="Contraseña" {...register('password', {
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
          })}/>
          <div className="min-h-[25px]">
            {formState.errors.password && (<span className="text-red-500 text-xs pl-2">{formState.errors.password.message}</span>)}
          </div>
        </div>

        <div className="flex flex-col">
          <input className="text-center" type="password" placeholder="Repite Contraseña" {...register('repeatPassword', {
            required: {
              value: true,
              message: 'Repetición requerida'
            },
            validate: (repeatPasswordValue) => {
              if (watch('password') !== repeatPasswordValue) {
                return 'Las contraseñas no coinciden'
              }
            }
          })}/>
          <div className="min-h-[25px]">
            {formState.errors.repeatPassword && (<span className="text-red-500 text-xs pl-2">{formState.errors.repeatPassword.message}</span>)}
          </div>
        </div>

        <button className={`py-1 px-3 ${formState.isValid ? 'bg-blue-300' : 'bg-blue-50'}`}>Registrarme</button>

      </form>
    </>
  );
}

export default Register;