import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import { MdMenu } from "react-icons/md";
import { useState } from 'react';
import MenuSidebar from "../MenuSidebar/MenuSidebar";

function Header() {
  // logica

  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  function toggleSidebar() {
    setIsOpenSidebar(!isOpenSidebar);
  }

  // renderizado
  return (
    <>
      <header className="bg-[rgb(34,34,34)] flex justify-between items-center h-[10vh] px-10 text-white">

        <Logo />

        <nav className="hidden sm:flex">
          <Menu />
        </nav>

        {isOpenSidebar && <MenuSidebar toggleSidebar={toggleSidebar}/>}

        <button className="flex sm:hidden" onClick={toggleSidebar}><MdMenu /></button>

      </header>
    </>
  );
}

export default Header;