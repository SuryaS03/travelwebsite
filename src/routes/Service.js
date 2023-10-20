import Navbar from "../components/navbar"
import Hero from "../components/Hero";
import AboutImg from '../assets/1.jpg'
function Service(){
    return(
        <>
        
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={AboutImg} 
        // imported image
        title="Service"

        //for checkin and to want to check
        btnClass="hide"
       
       />
       </>
    )
}
export default Service;