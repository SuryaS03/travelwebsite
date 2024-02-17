import { Component } from "react"
import "./DestinationStyle.css"



class DestinationData extends Component {
    render(){
        return(
            <div className={this.props.className}>
        <div className="des-text">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p><br></br>
            <h4><i>Recommended to visit in {this.props.place}</i></h4>
            <ul> 
                <li>{this.props.place1}</li>
                <li>{this.props.place2}</li>
                <li>{this.props.place3}</li>
                <li>{this.props.place4}</li>
            </ul>

</div>
<div className="image">
    <img alt="img" src={this.props.img1}/>
    <img alt="img" src={this.props.img2}/>
</div>
        </div>

        )
    }

}
export default DestinationData;