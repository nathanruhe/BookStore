// IMPORTACION CSS UTILIZANDO MODULES
// import styles from "./BookItem.module.css"


function BookItem () {
    // logica
  
  
  
    // renderizado
    return (
      <>
        <div className="bg-white h-[450px] w-[250px] shadow-lg rounded-lg text-ml">
            <div className="h-[70%]">
                <img src="../../../public/img/el-perfume.jpg" alt="" className="h-full w-full rounded-t-lg" />
            </div>
            <div className="h-[30%] flex flex-col justify-center gap-[15px] p-[10px]">
                <p className="font-[900]">El Perfume</p>
                <div className="flex justify-between items-center">
                    <p>Patrick Süskind</p>
                    <p className="bg-[rgb(116,121,145)] text-white px-[10px] py-[2px] rounded-full">Novela</p>
                </div>
                <div className="flex justify-between items-center">
                    <p>19.90€</p>
                    <div className="flex gap-[10px]">
                        <button className=" bg-blue-400 text-white py-[2px] px-1 rounded-md">editar</button>
                        <button className=" bg-red-500 text-white py-[2px] px-1 rounded-md">borrar</button>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  }
  
  export default BookItem;