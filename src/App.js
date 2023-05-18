import Data from "./components/Data";
import React, { useState } from 'react'
import Chat from "./components/Chat";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";



function App() {
  const [idInstance, setIdInstance] = useState('')
  const [apiTokenInstance, setApiTokenInstance] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')



  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path="/" element={<Data idInstance={idInstance} setIdInstance={setIdInstance} apiTokenInstance={apiTokenInstance} setApiTokenInstance={setApiTokenInstance}  phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}  />}/>
        <Route path="chat" element={<Chat idInstance={idInstance} apiTokenInstance={apiTokenInstance} phoneNumber={phoneNumber} />} />
      </Routes>
    </div>
  )
  
}

export default App;
