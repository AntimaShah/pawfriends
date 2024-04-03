import { FaPaw } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
export default function Medical() {
  return (
    <div className="vetclinic">
      <h3>Medical Care</h3>
      <p>
        The PawFriends Veterinary Clinic is a not-for-profit vet clinic. We
        provide quality veterinary care at low costs to anyone in need of such
        services, whether you’re an animal rescuer, pet owner or simply a good
        samaritan who helps animals! Both pets and strays are welcome at our
        clinic.
      </p>
      <div className="medicalcare">
        <div className="colum1">
          <li>
            <FaPaw /> General check-ups
          </li>
          <li>
            <FaPaw /> Vaccinations
          </li>
          <li>
            <FaPaw />
            Parasite prevention
          </li>
          <li>
            <FaPaw /> Wound dressing and maggot removal
          </li>
        </div>
        <div className="colum1">
          <li>
            <FaPaw />
            Viral infections
          </li>
          <li>
            <FaPaw />
            Allergies
          </li>
          <li>
            <FaPaw />
            Spay/neuter and other surgeries with post-operative care
          </li>
          <li>
            <FaPaw />
            Inpatient admission for cats
          </li>
        </div>
      </div>
      <div className="timings">
        <h1> Clinic Timings</h1>
        <h5>Monday-Saturday</h5>
        <h4>10:00am - 6:00pm</h4>
      </div>
      <div className="reachout">
        <h1>Reach Out</h1>
        <p>
          <h6>address:</h6> A3 building near thakur house <br />
          ashok nagar kandivali east <br />
          Mumbai 400101 maharashtra
        </p>
        <br />
        <h6>Contant Info</h6>
        <i className="phone">
          <FaPhoneAlt />
          +91 9356845645 <br />
          <FaPhoneAlt />
          +91 9764322047
        </i>
        <br />
        <i className="envenlp">
          <FaEnvelope />
          info@PawFriends.com
        </i>
      </div>
    </div>
  );
}
