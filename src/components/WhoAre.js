import Contact from "./Contant";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
export default function WhoAreWe() {
  return (
    <div className="wrwcontainer">
      <h1> who are we </h1>
      <div className="whoarewe">
        <p>
          We are a Mumbai-based non-profit organisation for animal welfare that
          was started in 2022 by a group of imaginative animal lovers. We are
          dedicated to improving the living conditions of the thousands of
          ownerless cats and dogs that roam Mumbai's streets. We believe that by
          being kind and compassionate, we can improve the quality of life for
          stray and abandoned animals, which is why we are committed to their
          rescue and rehabilitation.
        </p>
        <img src={"/assets/romina-bm-11gkKRjm6eM-unsplash.jpg"} />
      </div>
      <div className="vision">
        <h1> Our Vision</h1>
        <p>
          Our goal is to create a compassionate world for all animals. After
          tens of thousands of animals, we continue to put in a lot of effort to
          guarantee that every dog, cat receives the same level of love, care,
          and respect.
        </p>
      </div>
      <div className="philosophy">
        <h1> our philosophy</h1>
        <p>
          In Mumbai, there may be a hundred thousand to almost a million stray
          cats,dogs that are afflicted with a variety of issues like starvation,
          sickness, and wounds from predators and automobiles. The degree to
          which these cats and dogs are impacted varies according on their age,
          location, if they are being looked after by a caretaker, and other
          similar circumstances. It is impractical to remove every stray cat and
          dog from the streets of Mumbai and find them homes because there are
          so many of them. Moving them who are accustomed to living outside into
          apartments can also be harmful to them. <br />
          <br />
          Sterilised, immunised, and routinely fed with a high-quality diet by a
          caretaker, stray cats and dogs  can actually live long, happy lives.
          Therefore, our guiding principle is that sterilisation programmes,
          feeder support, preventative care, and medical care can all help stray
          cats and animals in Mumbai enjoy better lives.
          <br /> <br /> In addition, we intend to create am animal loving
          community that will be concerned about their needs by increasing
          public awareness of stray cats , dogs  and their lives. A healthy and
          sustainable population of street cats and dogs coexisting peacefully
          with humans is what we want for Mumbai.
        </p>

        <div className="imgbox">
          <img src={"/assets/anoir-chafik-2_3c4dIFYFU-unsplash.jpg"} />
          <img src={"/assets/carlos-andres-gomez-kcDcSoofaqc-unsplash.jpg"} />
          <img src={"/assets/jesse-schoff-i2DefZ6PCN0-unsplash.jpg"} />
          <div className="overlay"></div>
        </div>
      </div>
      <div className="contantform">
        <Contact />
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
