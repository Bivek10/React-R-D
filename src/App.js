import React from "react";
import Header from "./portfolio/Header";
import "./App.css";
import Home from "./portfolio/Home";
import About from "./portfolio/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./portfolio/Contact";
import Error from "./components/routing/Error";
export const UserContext = React.createContext();
export const AddressContext = React.createContext();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header/>
      </BrowserRouter>
    
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/portfolio" element={<Portfolio/>}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
