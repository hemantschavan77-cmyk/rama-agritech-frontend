import "./App.css"
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Crops from "./pages/Crops";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CropDetails from "./pages/CropDetails";
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/crops/:slug" element={<CropDetails/>} />
      <Route path="/crops" element={<Crops/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
