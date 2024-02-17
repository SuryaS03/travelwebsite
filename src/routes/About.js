import Navbar from "../components/navbar"
import Hero from "../components/Hero";
import AboutImg from '../assets/night.jpg'
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
function About(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={AboutImg} 
        // imported image
        title="About"

        //for checkin and to want to check
        btnClass="hide"
       
       />
       <AboutUs/>
       <Footer/>
        </>
    )
}
export default About;