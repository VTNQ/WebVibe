import React from "react";
import NavBar from "../components/Navbar";

import Footer from "../components/Footer";
import Section8 from "../components/Homepage/Section8/Section8";
import Section3 from "../components/Homepage/Section3/Section3";
import Section4 from "../components/Homepage/Section4/Section4";
import Section5 from "../components/Homepage/Section5/Section5";
const HomePage=()=>{
  
return(
    <>
    <NavBar/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section8/>
    <Footer/>
    </>
    
)
}
export default HomePage;