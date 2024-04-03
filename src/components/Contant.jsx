import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Contact() {
  const handleSubmit = () => {
    alert("form is submitted");
  };
  return (
    <div className="contactcontainer">
      <div className="contactform">
        <div className="contactus">
          <h1> We’d love to hear from you</h1>
          <form action="https://formspree.io/f/xzblzdkk" method="POST">
            <label for="fname">Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" />
            <label for="phone">Phone</label>
            <input type="text" id="phone" name="phone" placeholder="Phone" />
            <label for="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
            ></textarea>
            <textarea
              name="message"
              cols="30"
              rows="10"
              required
              placeholder="Enter your mesaage"
            />
            <input type="submit" value="Submit" onClick={handleSubmit} />
          </form>
        </div>
        {/* <img src={"/assets/david-lezcano-m-Doa-GTrUw-unsplash.jpg"} /> */}
      </div>
    </div>
  );
}
