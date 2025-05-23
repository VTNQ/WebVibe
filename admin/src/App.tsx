import React from "react"
import { Routes, Route, useRoutes } from 'react-router-dom';
import HomePage from "./pages/Homepages";
function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
    </>
  )
}

export default App
