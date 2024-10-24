import { useState } from "react";


// FORMULARIO CONTROLADO COMPLEJO

function Profile () {
  // logica

  const [formValues, setFormValues] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    foto: '',
  });

  function handleFormValuesChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name;
    const value = event.target.value;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log('Datos actualizados:', formValues);

    setFormValues({
      nombre: '',
      apellidos: '',
      email: '',
      foto: '',
    });
  }

  // renderizado
  return (
    <>
      <h1 className="mb-10">Profile</h1>

      <p>Actualiza tus datos de usuario</p>

      <form onSubmit={handleSubmit} className="border-2 border-red-200 bg-red-50 flex flex-col gap-3 m-5 items-center justify-center py-5 px-10">

        <input className="text-center"
          type="text" 
          placeholder="Name" 
          name="nombre" 
          value={formValues.nombre} 
          onChange={handleFormValuesChange}
        />

        <input className="text-center"
          type="text" 
          placeholder="Apellidos" 
          name="apellidos" 
          value={formValues.apellidos} 
          onChange={handleFormValuesChange}
        />

        <input className="text-center"
          type="email" 
          placeholder="Email" 
          name="email" 
          value={formValues.email} 
          onChange={handleFormValuesChange}
        />

        <input className="text-center"
          type="text" 
          placeholder="Foto" 
          name="foto" 
          value={formValues.foto} 
          onChange={handleFormValuesChange}
        />

        <button className="py-1 px-3 bg-blue-200">Actualizar Datos</button>

      </form>
    </>
  );
}

export default Profile;