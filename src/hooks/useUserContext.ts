import { useContext } from "react";
import { UserContext } from "../contexts/UserProvider";

function useUserContext() {
  
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUserContext solo lo puedes usar dentro de un componente que esté dentro de UserProvider');
  }

  return context;
}

export default useUserContext;
