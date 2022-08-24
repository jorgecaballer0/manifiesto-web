import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      {/*** Servicios ***/}
      <Services/>
      {/*** Portfolio ***/}
      <Portfolio/>
      <Footer/>
    </>
  );
}

export default App;
