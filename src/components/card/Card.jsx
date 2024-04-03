import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <div className="cardcontainer">
      <div class="card">
        <div className="cardimg">
          <img src={data.img} alt="text" />
        </div>

        <div class="card__details">
          <div class="name">{data.title}</div>

          <p>{data.description}</p>
<Link to="/rescues">
          <button>Read more</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
