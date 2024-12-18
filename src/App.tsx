import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import { ToastContainer } from 'react-toastify';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import Profile from "./pages/Profile";
import Books from "./pages/Books";
import Error404 from "./pages/Error404";
import EditBook from "./pages/EditBook";

function App() {



  return (
    <>
      <Header />
      <main className="flex flex-col min-h-[80vh] justify-center items-center p-12">
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route element={<PublicRoute />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/books" element={<Books />} />
            <Route path="/addbook" element={<AddBook />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/editbook" element={<EditBook />} />
          </Route>

          <Route path="*" element={<Error404 />} />

        </Routes>
      </main>
      <Footer />

      <ToastContainer
        closeOnClick={false}
        draggable={false}
        pauseOnHover={false}
        toastClassName="bg-orange-100 text-black font-bold rounded-rl-xl"
        bodyClassName="text-lg"
        icon={false}
      />
    </>
  );
}

export default App;
