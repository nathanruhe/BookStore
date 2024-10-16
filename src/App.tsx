import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BooksPage from "./pages/BooksPage";

function App() {
  // logica




  
  // renderizado
  return (
    <>
      <Header/>
      <main className="flex flex-col min-h-[80vh] justify-center items-center">
        <BooksPage />
      </main>
      <Footer/>
    </>
  );
}

export default App;
