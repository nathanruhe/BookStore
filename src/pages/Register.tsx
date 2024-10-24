import { useRef } from "react"


// FORMULARIO NO CONTROLADO

function Register () {
    // logica
  
    const inputNombreRef = useRef<HTMLInputElement>(null);
    const inputApellidosRef = useRef<HTMLInputElement>(null);
    const inputEmailRef = useRef<HTMLInputElement>(null);
    const inputFotoRef = useRef<HTMLInputElement>(null);
    const inputContrasenaRef = useRef<HTMLInputElement>(null);
    const inputRepetirRef = useRef<HTMLInputElement>(null);

    function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();

      const values = {
        Nombre: inputNombreRef.current?.value,
        Apellidos: inputApellidosRef.current?.value,
        email: inputEmailRef.current?.value,
        Foto: inputFotoRef.current?.value,
        Contraseña: inputContrasenaRef.current?.value,
        Repetir: inputRepetirRef.current?.value
      }

      console.log('Usuario Registrado:', values);

      if (inputNombreRef.current) inputNombreRef.current.value = '';
      if (inputApellidosRef.current) inputApellidosRef.current.value = '';
      if (inputEmailRef.current) inputEmailRef.current.value = '';
      if (inputFotoRef.current) inputFotoRef.current.value = '';
      if (inputContrasenaRef.current) inputContrasenaRef.current.value = '';
      if (inputRepetirRef.current) inputRepetirRef.current.value = '';
    }
  
    // renderizado
    return (
      <>
        <h1 className="mb-10">Register</h1>

        <p>¡Regístrate para guardar tus libros!</p>

        <form onSubmit={handleSubmit} className="border-2 border-red-200 bg-red-50 flex flex-col gap-3 m-5 items-center justify-center py-5 px-10">

          <input className="text-center"
            type="text" 
            placeholder="Nombre" 
            ref={inputNombreRef}
          />

          <input className="text-center"
            type="text" 
            placeholder="Apellidos" 
            ref={inputApellidosRef}
          />

          <input className="text-center"
            type="email" 
            placeholder="Email" 
            ref={inputEmailRef}
          />

          <input className="text-center"
            type="text" 
            placeholder="Foto" 
            ref={inputFotoRef}
          />

          <input className="text-center"
            type="password" 
            placeholder="Contraseña" 
            ref={inputContrasenaRef}
          />

          <input className="text-center"
            type="password" 
            placeholder="Repetir contraseña" 
            ref={inputRepetirRef}
          />

          <button className="py-1 px-3 bg-blue-200">Regístrate</button>

        </form>
      </>
    );
  }
  
  export default Register;