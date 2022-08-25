import "./App.css";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/*** Servicios ***/}
        <Route exact path="/servicios" element={<Services />} />
        {/*** Portfolio ***/}
        <Route exact path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
