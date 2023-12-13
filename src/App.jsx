import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Service from "./components/Service";
import About from "./components/About";
import Resume from "./components/Resume";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
    <Routes>
      
      <Route path="/" Component={Hero}/>
      <Route path="/service" Component={Service}/>
      <Route path="/about" Component={About}/>
      <Route path="/project" Component={Service}/>
    </Routes>
  </BrowserRouter>
  
    // <div className="app">
    //   <div>
    //     <Header></Header>
    //   </div>

    //   <div className="section px-[20px] md:[60px] lg:px-[80px]">
        
        
        
       
    //   </div>
    // </div>
  );
}

export default App;
