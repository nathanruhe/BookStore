
type MenuProps = {
  vertical?: boolean;
};


function Menu ({vertical = false}: MenuProps) {
  // logica
  


  // renderizado
  return (
    <>
      <nav className={`flex gap-5 text-xl font-bold ${vertical ? "flex-col" : "flex-row"}`}>
          <a href="" >Home</a>
          <a href="" >Libros</a>
          <a href="" >Login</a>
      </nav>
    </>
  );
}
  
  export default Menu;