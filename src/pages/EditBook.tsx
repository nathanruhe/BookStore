import { useState } from "react";


// FORMULARIO CONTROLADO COMPLEJO

function EditBook () {
  // logica

  const [formValues, setFormValues] = useState({
    Título: '',
    Autor: '',
    Genero: '',
    Foto: '',
    Precio: '',
  });

  function handleFormValuesChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name;
    let value: string | number = event.target.value;

    if (name === "Precio" && value !== '') {
      value = parseFloat(value);
    }
  
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); 

    console.log('Libro Editado:', formValues);

    setFormValues({
      Título: '',
      Autor: '',
      Genero: '',
      Foto: '',
      Precio: '',
    });
  }

  // renderizado
  return (
    <>
      <h1 className="mb-10">EditBook</h1>

      <p>Edita el libro</p>

      <form onSubmit={handleSubmit} className="border-2 border-red-200 bg-red-50 flex flex-col gap-3 m-5 items-center justify-center py-5 px-10">

        <input className="text-center"
          type="text" 
          placeholder="Título" 
          name="Título" 
          value={formValues.Título} 
          onChange={handleFormValuesChange}
        />

        <input className="text-center"
          type="text" 
          placeholder="Autor" 
          name="Autor" 
          value={formValues.Autor} 
          onChange={handleFormValuesChange}
        />

        <input className="text-center"
          type="text" 
          placeholder="Género" 
          name="Genero" 
          value={formValues.Genero} 
          onChange={handleFormValuesChange}
        />

        <input className="text-center"
          type="text" 
          placeholder="Foto" 
          name="Foto" 
          value={formValues.Foto} 
          onChange={handleFormValuesChange}
        />

        <input className="text-center"
          type="number" 
          placeholder="Precio" 
          name="Precio" 
          value={formValues.Precio} 
          onChange={handleFormValuesChange}
        />

        <button className="py-1 px-3 bg-blue-200">Actualizar Libro</button>

      </form>
    </>
  );
}

export default EditBook;