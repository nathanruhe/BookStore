import { NavLink } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";

import useUserContext from "../../hooks/useUserContext"

type MenuProps = {
  vertical?: boolean;
  toggleSidebar?: () => void;
};

function Menu ({vertical = false, toggleSidebar}: MenuProps) {
  
  const { user, logout } = useUserContext();

  const handleLogout = () => {
    logout();
    if (toggleSidebar) toggleSidebar();
  };

  return (
    <>
      <nav className={`flex gap-5 text-xl font-bold items-center ${vertical ? "flex-col" : "flex-row"}`}>

        <NavLink className="[&.active]:text-red-400" onClick={toggleSidebar} to="/">Home</NavLink>

        {!user && <NavLink className="[&.active]:text-red-400" onClick={toggleSidebar} to="/register">Register</NavLink>}
        {!user && <NavLink className="[&.active]:text-red-400" onClick={toggleSidebar} to="/login">Login</NavLink>}

        {user && <NavLink className="[&.active]:text-red-400" onClick={toggleSidebar} to="/books">Books</NavLink>}
        {user && <NavLink className="[&.active]:text-red-400" onClick={toggleSidebar} to="/addbook">AddBook</NavLink>}
        {user && <NavLink className="[&.active]:text-red-400" onClick={toggleSidebar} to="/profile">Profile</NavLink>}

        {user && (<button className="text-3xl hover:text-red-400" onClick={handleLogout}><IoLogOutOutline /></button>)}

      </nav>
    </>
  );
}
  
export default Menu;