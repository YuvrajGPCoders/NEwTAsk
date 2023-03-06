import React from "react";
import Loginpage from "./NewComponents/LoginPage";

import { Routes, Route } from "react-router-dom";
import AdminPanel from "./NewComponents/AdminPanel";
import HomePage from "./NewComponents/HomePage";
import FormShorting from "./NewComponents/FormShorting";


function App() {
  return (
    <div className="App">
  
      <Routes>
         <Route exact path="/" name="Login Page" element={<Loginpage/>} /> 
       <Route exact path="/adminpage" name="adminpage" element={<AdminPanel/>} /> 
       <Route exact path="/homepage" name="homepage" element={<HomePage/>} /> 
       <Route exact path="/shorting" name="shorting" element={<FormShorting/>} /> 
      </Routes>
    </div>
  );
}

export default App;
