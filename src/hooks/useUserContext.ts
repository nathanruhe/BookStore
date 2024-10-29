import { useContext } from "react";
import { UserContext } from "../contexts/UserProvider";

function useUserContext() {
  
  const user = useContext(UserContext);

  if (!user) {
    throw new Error('useUserContext solo lo puedes usar dentro de un componente que esté dentro de UserProvider');
  }

  return user;
}

export default useUserContext;
