import Navbar from "../components/navbar"
import Hero from "../components/Hero";
import Destination from "../components/Destination";
function Home(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        title="Your Journey Your Story"
       text="Choose Your Favourite Destination"
       buttonText="Travel Plan"
       url="/"
       btnClass="show"
       />
       <Destination/>
        </>
    );
}
export default Home;