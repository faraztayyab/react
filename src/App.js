import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Order from "./components/Order";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';


function App() {
  return (
    <BrowserRouter>
      
        <Navbar />
        <Routes>
          <Route path="/home" element={<Hero/>} /> 
          <Route path="/gallery" element={<Gallery/>}/>   
          <Route path="/order" element={<div><Hero /><Order/></div>}/> 
          <Route path="/*" element={<Hero />} />
        </Routes>

        <Footer />
      


    </BrowserRouter>
  );
}

export default App;
