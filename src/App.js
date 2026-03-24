 
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from './pages/Home';
import Cartpage from "./redux/Cartpage";
import { BrowserRouter ,Routes ,Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Service from "./pages/Service";
function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Cartpage" element={< Cartpage/>}/>
          </Routes>
          <Footer />
        </BrowserRouter>
        {/* <Navbar />
         <About/>
      <Footer /> */}
      </HelmetProvider>
    </div>
  );
}

export default App;
