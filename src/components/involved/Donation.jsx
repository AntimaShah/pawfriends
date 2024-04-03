import BuyButtonComponent from "../Buybutton/BuyButton";
import { Link } from "react-router-dom";
export default function Donation(){
    return(<div className="maindonation">
        <BuyButtonComponent></BuyButtonComponent>
        <div className="sponsormonth">
        <div className="sponsorcat">
            <h4>sponsor a cat</h4>
            <p>Sponsor our residents to look after their meals, medical treatment and care.</p>
        < Link to="https://buy.stripe.com/test_9AQ3dl6BS30e9TG9AD" target="_blank" rel="noopener noreferrer">
     <button className='donatebutton'>DONATE</button>
   </Link>
   </div>
   <div className="sponsorcat">
            <h4>sponsor a dog</h4>
            <p>Sponsor our residents to look after their meals, medical treatment and care.</p>
        < Link to="https://buy.stripe.com/test_9AQ9BJ2lC1Wa4zm8wy" target="_blank" rel="noopener noreferrer">
     <button className='donatebutton'>DONATE</button>
   </Link>
   </div>
        </div>
        </div>

    );
}