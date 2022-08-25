import "./App.css";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Home />
      {/*** Servicios ***/}
      <Services />
      {/*** Portfolio ***/}
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
