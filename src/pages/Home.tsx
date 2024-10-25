import Heading from "../components/Heading/Heading";

function Home() {


  return (
    <>
      <div className="min-h-[68vh] flex flex-col items-center gap-10">

        <div className="w-full flex justify-center">
          <Heading level="h1">Home</Heading>
        </div>

        <div className="flex-grow flex items-center justify-center">

          <img src="./public/img/portada.png" alt="" className="h-[550px] rounded-xl shadow-[0_0_10px_1px_#f87171]"/>

        </div>

      </div>
    </>
  );
}

export default Home;