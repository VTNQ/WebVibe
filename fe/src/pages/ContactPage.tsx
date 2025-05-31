import Section1 from "@/components/Contact/Section1/Section1";
import Section8 from "@/components/Homepage/Section8/Section8";
import NavBar from "@/components/Navbar";
import Footer from "../components/Footer";
import Section2 from "@/components/Contact/Section2/Section2.tsx";
const ContactPage=()=>{
    return(
       <>
        <NavBar/>
        <Section1/>
           <Section2/>
        <Section8/>
        <Footer/>
       </>
    )
}
export default ContactPage;