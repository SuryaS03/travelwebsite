import "./TripStyles.css"
import TripData from "./TripData";
import Trip1 from "../assets/oo.jpg"
import Trip2 from "../assets/v.jpg"
import Trip3 from "../assets/m.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover a unique destination using google maps.</p>
        
        <div className="tripcard">
          <TripData
           image={Trip1} 
           heading="Trip in Ooty"
           text="A gorgeous hill station in Tamil Nadu, and is considered a haven for nature lovers from all the country. Ensconced in the lap of nature, this town is surrounded on all sides by the towering Nilgiris, evergreen fir trees and of course, lakes small and large.The Botanical Garden in Ooty is one of the oldest and most well-maintained botanical gardens in India."
           />  

<TripData
           image={Trip2} 
           heading="Trip in Vagamon"
           text=" A beautiful picnic spot famous for trekking,  grassy hills, velvet lawns and overall mysticism of the place is something unique.The most popular religious places in Vagamon are Thangal Para, Kurisumala Ashram and Murugan Mala. It will have an amazing experience  and will definitely come back home with a bag full of lovely memories."
           /> 

<TripData
           image={Trip3} 
           heading="Trip in  Munnar"
           text="Virgin forests, savannah, rolling hills, scenic valleys, numerous streams, huge splashy waterfalls, sprawling tea plantations and winding walkways are all part of the great holiday experience on offer for a traveler to Munnar. Munnar is also known for Neelakurinji, a rare plant which flowers only once in twelve years."/> 
        </div>
        </div>
    )
}
export default Trip;