import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";

function Header () {
  // logica




  // renderizado
  return (
    <>
      <header className="bg-[rgb(34,34,34)] flex justify-between items-center h-[10vh] px-10 text-white">
        <Logo />
        <Menu />
      </header>
    </>
  );
}

export default Header;