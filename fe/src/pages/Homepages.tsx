import React from "react";
import NavBar from "../components/Navbar";

import Footer from "../components/Footer";
import Section8 from "../components/Homepage/Section8/Section8";
import Section3 from "../components/Homepage/Section3/Section3";
import Section6 from "../components/Homepage/Section6/Section6";
import Section7 from "../components/Homepage/Section7/Section7";
const HomePage=()=>{
  
return(
    <>
    <NavBar/>
    <Section3/><Section6/><Section7/>
    <Section8/>
    <Footer/>
    </>
    
)
}
export default HomePage;