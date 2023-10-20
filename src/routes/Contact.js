import Navbar from "../components/navbar"
import Hero from "../components/Hero";
import AboutImg from '../assets/2.jpg'
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
       
       /></>
    )
}
export default Contact;