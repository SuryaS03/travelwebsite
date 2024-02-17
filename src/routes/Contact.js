import Navbar from "../components/navbar"
import Hero from "../components/Hero";
import AboutImg from '../assets/3.jpg'
import Footer from "../components/Footer";
function Contact(){
    return(
        <>
         <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={AboutImg} 
        // imported image
        title="Contact"

        //for checkin and to want to check
        btnClass="hide"
       
       />
       <Footer/>
       </>
    )
}
export default Contact;