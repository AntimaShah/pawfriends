import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footeer() {
  /*   const FaEnvelope = ({ size }) => <FaEnvelope style={{ fontSize: size }} />;
   */ return (
    <div className="footer">
      <div class="row">
        <div class="column">
          {<img src={"/assets/logotrans.png"} />}
          <p>Giving hope and shelter to abandoned animals</p>
          <p> Help Us Save Man’s Best Friends </p>
        </div>
        <div class="column">
          <h3>Services</h3>
          <ul class="linksf">
            <li class="active">
              <a href="/vaccination">vaccination</a>
            </li>
            <li>
              <a href="/steralization">Sterilisation</a>
            </li>
            <li>
              <a href="/medicalcare">medical care</a>
            </li>
            <li>
              <a href="/rescues">rescues</a>
            </li>
          </ul>
        </div>

        <div class="column">
          <h3>who are we </h3>
          <ul class="linksf">
            <li class="active">
              <a href="/whoarewe">about</a>
            </li>
            <li>
              <a href="/whoarewe">our philosophy</a>
            </li>
            <li>
              <a href="/contact">contant</a>
            </li>
          </ul>
        </div>
        <div class="column">
          <h3>get involved</h3>
          <ul class="linksf">
            <li class="active">
              <Link to="/getinvolved">donation</Link>
            </li>
            <li>
              <Link to="/adoption">adoption</Link>
            </li>
            <li>
              <a href="/getinvolved">volunteer</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="icons">
        <FaInstagram />
        <FaEnvelope />
        <FaFacebook />
      </div>
    </div>
  );
}
