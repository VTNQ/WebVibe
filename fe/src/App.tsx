import * as  React from "react"
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/Homepages";
import ProductPage from "./pages/Productpage";

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/product"element={<ProductPage/>}/>
      {/*jdkv*/}
    </Routes>
    </>
  )
}

export default App
