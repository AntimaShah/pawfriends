import { Link } from "react-router-dom";
export default function Navbar({ handleLogout }) {
  return (
    <div className="navbar">
      <div class="logo">
        <img src={"/assets/WhatsApp Image 2023-04-09 at 16.04.39.jpeg"} />
      </div>
      <nav>
        <ul class="links">
          <li class="active">
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/services">SERVICES</Link>
          </li>
          <li>
            <Link to="/getinvolved">GET INVOLVED</Link>
          </li>
          <li>
            <Link to="/whoarewe">WHO ARE WE</Link>
          </li>
        </ul>
      </nav>
      <Link to="/donation" class="btn">
        DONATE
      </Link>
      <Link to="/signin" class="signbtn">
        SIGN UP
      </Link>
    </div>
  );
}
