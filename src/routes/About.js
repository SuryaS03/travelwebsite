import Navbar from "../components/navbar"
import Hero from "../components/Hero";
import AboutImg from '../assets/night.jpg'

function About(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
       
       />
        </>
    )
}
export default About;