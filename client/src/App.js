import { Route, Routes } from "react-router-dom"
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { RobotContextProvider } from "./context/RobotContext";
function App() {
  return (
    <>
    <RobotContextProvider>
    <Navbar/>
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Routes>
    <Footer/>
    </RobotContextProvider>
    </>
  );
}

export default App;
