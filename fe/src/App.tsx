import  React from "react"
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/Homepages";
function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      {/*jdkv*/}
    </Routes>
    </>
  )
}

export default App
