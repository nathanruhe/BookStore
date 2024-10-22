import { NavLink } from "react-router-dom";

type MenuProps = {
  vertical?: boolean;
};


function Menu ({vertical = false}: MenuProps) {
  // logica
  
  const user = null;
  // const user = { name: 'Jonathan' };


  // renderizado
  return (
    <>
      <nav className={`flex gap-5 text-xl font-bold ${vertical ? "flex-col" : "flex-row"}`}>

        <NavLink to="/">Home</NavLink>

        {!user && <NavLink to="/register">Register</NavLink>}
        {!user && <NavLink to="/login">Login</NavLink>}

        {user && <NavLink to="/books">Books</NavLink>}
        {user && <NavLink to="/addbook">AddBook</NavLink>}
        {user && <NavLink to="/profile">Profile</NavLink>}

      </nav>
    </>
  );
}
  
  export default Menu;