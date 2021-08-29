
import './App.css';
import About from './Components/About';
import Feature from './Components/Feature';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Offer from './Components/Offer';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Header/>
    <Feature/>
    <Offer/>
    <About/>
    <Contact/>
    </div>
  )
}

export default App;
