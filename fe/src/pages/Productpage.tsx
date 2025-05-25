import NavBar from "../components/Navbar"
import React from "react"
import ProductCard from "../components/Product/productCard"
import Section8 from "../components/Homepage/Section8/Section8"
import Footer from "../components/Footer"
const ProductPage=()=>{
    return(
        <>
        <NavBar/>
        <ProductCard/>
        <Section8/>
        <Footer/>
        </>
    )
}
export default ProductPage;