import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Heading from "../components/Heading/Heading";

function Error404() {

  const [timer, setTimer] = useState(10);

  const navigate = useNavigate();

  useEffect(() => {

    const timeout = setTimeout(() => {
      navigate("/");
    }, 10000)

    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1)
    }, 1000)

    return () => {
      clearTimeout(timeout);
      clearInterval(interval)
    }

  }, [navigate])

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <Heading level="h1">Error 404</Heading>
        <p className="font-bold text-lg">Page Not Found</p>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center">
        <h2 className="font-bold text-2xl">Volver a la <Link className="text-gray-400 hover:text-red-400" to="/">Home</Link></h2>
        <p className="font-bold text-lg">Volviendo automáticamente en {timer} segundos..</p>
      </div>
    </>
  );
}

export default Error404;
