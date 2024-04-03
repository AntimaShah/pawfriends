import { Link } from "react-router-dom";

const Rescuec = ({ data }) => {
  return (
    <div className="cardcontainer">
      <div class="card">
        <div className="cardimg">
          <img src={data.img} alt="text" />
        </div>

        <div class="card__details">
          <div class="name">{data.title}</div>

          <p>{data.description}</p>
        </div>
        <Link to="/donation">
          <button className="rescuedonate">Donate</button>
        </Link>
      </div>
    </div>
  );
};

export default Rescuec;
