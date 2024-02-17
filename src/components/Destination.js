import mountain1 from "../assets/1.jpg"
import mountain2 from "../assets/ko2.jpg"
import mountain3 from "../assets/k1.jpg"
import mountain4 from "../assets/k2.jpg"
import mountain5 from "../assets/y2.jpg"
import mountain6 from "../assets/y1.jpg"

import DestinationData from "./DestinationdData"
import "./DestinationStyle.css"
const Destination=()=>{
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give You the opportunity to see a lot,within a time frame.</p>

        <DestinationData
        className="first-des"
        
        heading="Kodaikanal,Tamilnadu."
        text=" Referred to as the “Princess of Hills”, Kodaikanal is one of the most sought-after hill station destinations in Tamil Nadu and the whole of India. Located at about 7000 ft above the sea-level, Kodaikanal was established as a destination by British bureaucrats and Christian missionaries in the year of 1845.
        
         The pride of Kodaikanal is the 'Kurinji-flower', which blossoms once in 12 years, imparting an ethereal beauty to the hills."
        place="Kodaikanal "
        place1="Pillar Rocks Road"
        place2="Silver Cascade falls"
        place3="Berijam Lake"
        place4="Poombarai Village View"

        img1={mountain1}
        img2={mountain2}


        
        />
        <DestinationData
        className="first-des-reverse"
        
        heading="Kanyakumari ,Tamilnadu"
        text="Kanyakumari renowned for being the southernmost point of India and the meeting point of the Indian Ocean, Arabian Sea, and the Bay of Bengal.It is a popular tourist destination in India. It is famous for its ocean sunrise, sunset and moonrise. It also has the 133-foot (41 m) Thiruvalluvar Statue and Vivekananda Rock Memorial off the coast. The town has spiritual significance as the abode of the virgin Goddess Kanya Kumari, who is an incarnation of Goddess Parvati, the divine Mother Goddess. "
        place="Kanyakumari "
        place1="Thiruvalluvar statue & Vivekanandha Rock memorial"
        place2="Padmanabhapuram Palace"
        place3="vattakottai Fort"
        place4="Mathur Aqueduct"
        img1={mountain4}
        img2={mountain3}


        
        />

<DestinationData
        className="first-des"
        
        heading="Yercaud,Tamilnadu."
        text=" 
        Yercaud is a quaint hill town in South India which is known for its production of spices, coffee, silk and other textiles. It also has several attractions including the Loop Road, Yercaud Lake and Kiliyur Waterfalls that attracts a number of tourists throughout the year."
        place="Yercaud "
        place1="Peeku Park"
        place2="Karadiyur View Point"
        place3="Montfort School"
        place4="Big Lake"

        img1={mountain5}
        img2={mountain6}


        
        />
        
        </div>
    );
};
export default Destination;