import "./App.scss";
// IMPORT SECTIONS ->>
import Home from "./Components/Home/Home";
import ViewProduct from "./Components/ViewProduct/ViewProduct";
import Navbar from "./Components/Navbar/Navbar";
import Showall from "./Components/ShowAll/Showall";
// IMPORT TOAST CONTAINER FOR SET NOTIFY ->>
import { ToastContainer } from "react-toastify";
// IMPORT ROUTER COMPONENTS ->>
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view_product/:productName" element={<ViewProduct />} />
          <Route path="/show_all" element={<Showall />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
