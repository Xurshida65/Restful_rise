import "../src/app.css";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Footer } from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import { Navbar } from "./pages/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
