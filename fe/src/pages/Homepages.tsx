import * as React from "react";
import NavBar from "../components/Navbar";

import Footer from "../components/Footer";
import Section8 from "../components/Homepage/Section8/Section8";
import Section3 from "../components/Homepage/Section3/Section3";
import Section4 from "../components/Homepage/Section4/Section4";
import Section5 from "../components/Homepage/Section5/Section5";
import Section6 from "../components/Homepage/Section6/Section6";
import Section7 from "../components/Homepage/Section7/Section7";
import Section1 from "../components/Homepage/Section1/Section1";
import Section2 from "../components/Homepage/Section2/Section2";
const HomePage=()=>{

return(
    <>
    <NavBar/>
        <Section1/>
        <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
        <Section6/><Section7/>
    <Section8/>
    <Footer/>
    </>
    
)
}
export default HomePage;