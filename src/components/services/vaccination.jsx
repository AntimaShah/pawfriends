import { Link } from "react-router-dom";

export default function Vaccination() {
  return (
    <div className="vaccine">
      <h1>
        Vaccinating your kitten helps protect their health, making it so
        important they are placed on the right vaccination programme at the
        appropriate age.
      </h1>
      <div className="vaccination">
        <div className="vaccinationpara">
          <p>
            Vaccinate A world full of animal lovers would sigh at this point
            because they can't stress enough, how important and necessary
            vaccination is. The most deadly diseases can be easily avoided with
            simply one shot. Make sure the dog gets a 7in1 injection and an
            Anti-rabies shot.
            <br /> <br />
            Contact us, and get them to vaccinate .
          </p>
          <Link to="/resgistersvr" class="vcbtn">
            Register for vaccination
          </Link>
        </div>
        <img src="/assets/vaccinate.jpg" />
      </div>
    </div>
  );
}
