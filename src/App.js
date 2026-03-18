import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from './pages/Home';
import { BrowserRouter ,Routes ,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Product" element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Navbar />
         <About/>
      <Footer /> */}
    </div>
  );
}

export default App;
