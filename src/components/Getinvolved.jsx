import Contact from "./Contant";
import { Adoption } from "./involved/Adoption";
import { Volunteer } from "./involved/Volunteer";
import BuyButtonComponent from "./Buybutton/BuyButton";
import Donation from "./involved/Donation";

export default function Getinvolved() {
  return (
    <div>
 <Donation/>
      <Adoption/>
      <Volunteer/>
    </div>
  );
}
