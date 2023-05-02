import React from "react";
import "./App.css";
import Home from "./components/routing/Home";
import About from "./components/routing/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/routing/Profile";
import ContactUs from "./components/routing/ContactUs";
import Error from "./components/routing/Error";
export const UserContext = React.createContext();
export const AddressContext = React.createContext();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
