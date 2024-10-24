import { useState } from "react";


// FORMULARIO CONTROLADO SIMPLE

function Login () {
    // logica
    
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    
    function handleEmailChange (event: React.ChangeEvent<HTMLInputElement>) {
      setEmailValue(event.target.value);
    }

    function handlePasswordChange (event: React.ChangeEvent<HTMLInputElement>) {
      setPasswordValue(event.target.value);
    }

    function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
  
      const formData = {
        email: emailValue,
        password: passwordValue
      };

      console.log('Usuario Logueado:', formData);

      setEmailValue('');
      setPasswordValue('');
    }
  
    // renderizado
    return (
      <>
        <h1 className="mb-10">Log In</h1>

        <p>¡Loguéate en tu cuenta!</p>

        <form onSubmit={handleSubmit} className="border-2 border-red-200 bg-red-50 flex flex-col gap-3 m-5 items-center justify-center py-5 px-10">

          <input className="text-center"
            type="email" 
            placeholder="Email" 
            value={emailValue} 
            onChange={handleEmailChange}
          />

          <input className="text-center"
            type="password" 
            placeholder="Password" 
            value={passwordValue} 
            onChange={handlePasswordChange}
          />

          <button className="py-1 px-3 bg-blue-200">Log In</button>

        </form>
      </>
    );
  }
  
  export default Login;