import { FaPaw } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Sterile() {
  return (
    <div className="steralization">
      <div className="sterile">
        <h1>steralization</h1>
        <p>
          We have sterilised and vaccinated 50+ animals
          <br /> till date.
        </p>
      </div>
      <div className="wrap">
        <h1> why should we spay or neuter </h1>
      </div>
      <div className="reasons">
        <p>
          <FaPaw />
          Reduces Aggression
        </p>
        <p>
          <FaPaw /> decrese overpopulation
        </p>
        <p>
          <FaPaw /> lower risk of cancer
        </p>
      </div>
      <div className="reasons2">
        <p>
          <FaPaw /> Reduce roaming
        </p>
        <p>
          <FaPaw /> increases lifespan over 3-5yrs
        </p>
      </div>
      <div className="sterilepara">
        <div className="para1">
          <p>
            Sterilisation prevents suffering, extends life for females, and
            reduces fighting and subsequent injury in males. Combined with
            rabies innoculation.
            <br /> sterilisation is internationally recognised as the most
            effective and human way to control population and spread of
            diseases.
          </p>
          <Link to="/resgistersvr" class="stbtn">
            Register for steralization
          </Link>
        </div>
        <div className="sterilegetin">
          <h3>What is Sterlization? </h3>
          <p>
            Sterilization is a surgical procedure done on both male and female
            cats that prevents unwanted litters. Performed by skilled
            veterinarians, it is a short and uncomplicated procedure requiring
            only basic post-operative care. Our sterilization drive is open to
            stray as well as pets , for a small fee. In addition to the surgery
            we also do post-operative care at our facility and vaccinate every
            cat against rabies.
          </p>
        </div>
      </div>
    </div>
  );
}
