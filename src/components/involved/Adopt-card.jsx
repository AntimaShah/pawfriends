import { Link } from "react-router-dom";

const AdoptCard = ({ data }) => {
    return (
      <div className="cardcontainer">
        <div class="card">
          <div className="cardimg">
            <img src={data.img} alt="text" />
          </div>
  
          <div class="card__details">
            <div class="name">{data.title}</div>
             <h4>{data.gender}</h4>
             <h4>{data.age}</h4>
            <p>{data.description}</p>
  <Link to="/adoptionform">
            <button>Adopt</button></Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default AdoptCard;
  