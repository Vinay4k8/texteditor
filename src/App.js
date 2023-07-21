import './App.css';
// import { About } from './components/About';
import Navbar from './components/Navbar';
import { TextForm } from './components/TextForm';
import React ,{useState}from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
const [mode,setMode]=useState("dark");
const handleMode=()=>{
  let a=mode==="light"?"dark":"light" ;
  document.body.style=` ${mode==="dark"?"light-bg":"dark-bg"}`
  setMode(a)
}
  return (

    <div className={`App ${mode==="dark"?"light-bg":"dark-bg"}`}>
     <Navbar title={"Text Editor"} handleMode={handleMode} mode={mode} />
      
      <TextForm mode={mode}/>
    </div>
    
  );
}

export default App;
