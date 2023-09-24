import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home/Home";
import Live from "./containers/Live/Live";
import Services from "./containers/Services/Services";
import About from "./containers/About/About";
import Gallery from "./containers/Gallery/Gallery";
import Contact from "./containers/Contact/Contact";
import Directions from "./containers/Directions/Directions";
import Pastor from "./containers/Pastor/Pastor";

function App() {
  return (
    <div className="App">
      {/*<Header />*/}
      <Navbar />
      <Routes>
        <Route path="/home" element={ <Home /> } />
        <Route path="/live" element={ <Live /> } />
        <Route path="/services" element={ <Services /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/gallery" element={ <Gallery /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/directions" element={ <Directions /> } />
        <Route path="/pastor" element={ <Pastor /> } />
        <Route path="/*" element={<Navigate to="/home" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
