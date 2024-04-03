import Medical from "./services/Medical";
import { Rescue } from "./services/Rescue";
import Sterile from "./services/Sterile";
import Vaccination from "./services/vaccination";

export default function Services() {
  return (
    <div className="services">
      {/*    <h1>services</h1>
      <h2> sterilization</h2>
      <h2> vaccination</h2>
      <h2> medical care </h2>
      <h2>rescues </h2> */}
      <Sterile />
      <Vaccination />
      <Medical />
      <Rescue />
    </div>
  );
}
