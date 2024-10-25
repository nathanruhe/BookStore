import { NavLink } from "react-router-dom";

type MenuProps = {
  vertical?: boolean;
  toggleSidebar?: () => void;
};


function Menu ({vertical = false, toggleSidebar}: MenuProps) {
  // logica
  
  // const user = null;
  const user = { name: 'Jonathan' };


  // renderizado
  return (
    <>
      <nav className={`flex gap-5 text-xl font-bold ${vertical ? "flex-col" : "flex-row"}`}>

        <NavLink className="[&.active]:text-red-400" onClick={toggleSidebar} to="/">Home</NavLink>

        {!user && <NavLink className="[&.active]:text-red-400" onClick={toggleSidebar} to="/register">Register</NavLink>}
        {!user && <NavLink className="[&.active]:text-red-400" onClick={toggleSidebar} to="/login">Login</NavLink>}

        {user && <NavLink className="[&.active]:text-red-400" onClick={toggleSidebar} to="/books">Books</NavLink>}
        {user && <NavLink className="[&.active]:text-red-400" onClick={toggleSidebar} to="/addbook">AddBook</NavLink>}
        {user && <NavLink className="[&.active]:text-red-400" onClick={toggleSidebar} to="/profile">Profile</NavLink>}

      </nav>
    </>
  );
}
  
  export default Menu;