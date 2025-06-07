import * as  React from "react"
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/Homepages";
import ProductPage from "./pages/Productpage";
import AboutUsPage from "./pages/AboutUsPages";
import ContactPage from "./pages/ContactPage";
import FashionPage from "./pages/FashionPages";
function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/fashion" element={<FashionPage/>}/>
      <Route path="/product"element={<ProductPage/>}/>
      <Route path="/aboutUs" element={<AboutUsPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      {/*jdkv*/}
    </Routes>
    </>
  )
}

export default App
