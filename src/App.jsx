import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Package from "./pages/Package";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
import { CardData } from "./context/context";
import './App.css';

function App() {
  return (
    <CardData>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/package" element={<Package />}></Route>
          <Route path="/about_us" element={<AboutUs />}></Route>
          <Route path="/contact_us" element={<ContactUs />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
        </Routes>
      </BrowserRouter>
    </CardData>
  );
}

export default App;