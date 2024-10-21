import Menu from "../Menu/Menu";

type MenuSidebarProps = {
    toggleSidebar: () => void;
};

function MenuSidebar({ toggleSidebar }: MenuSidebarProps) {
    // logica

    

    // renderizado
    return (
        <>
        <div className="bg-[rgb(34,34,34)] flex flex-col top-0 right-0 fixed w-[100%] h-100%">
            <button onClick={toggleSidebar} className="absolute top-5 right-5">X</button>

            <div className="mt-16 flex flex-col items-center mb-10">
                <Menu vertical />
            </div>
        </div>
        </>
    );
}

export default MenuSidebar;
