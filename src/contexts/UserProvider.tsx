import { createContext, ReactNode, useState } from "react";

type User = {
  id_user: number;
  name: string;
  last_name: string;
  email: string;
  photo: string;
};

type UserContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | null>(null);

function UserProvider({ children }: { children: ReactNode }) {

  // 1a opcion, es la tipica pero tiene un ligero problema y es que se carga una vista previa antes de que se cargue el useEffect(), en este caso el storage con los datos del usuario.
  // const [ user, setUser ] = useState<User | null>(null);

  // useEffect(() => {
  //     const storedUser = localStorage.getItem("user");
  //     if (storedUser) {
  //         setUser(JSON.parse(storedUser));
  //     }
  // }, []);

// 2n opcione, es mejor ya que evita esa vista previa antes de que se cargue el useEffect().
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      return user
    }
    return null;
  });

  const login = (user: User) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;
export { UserContext };



