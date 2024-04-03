import { Link } from "react-router-dom";

export function Volunteer(){
    return(
    <div className="volunteer">
                <h1>Join our amazing team of volunteers and<br/> make lives better for animals</h1>
        <div className="volunteerpara">
          
            <p>
      We are always looking for good people to help us do more good. If you are happy to help us out with medical, operational, fundraising activities and are available 3 days a week to bathe and feed animals, you’ve got our vote!
     <Link to="/volunteerform"> <button className="rescuebtn">Register for volunteer</button></Link>
</p>


<div className="volunteerpara">
<img src="https://thumbs.dreamstime.com/b/male-hand-petting-stray-dog-pet-shelter-people-animals-volunteering-helping-concept-close-up-male-hand-petting-stray-dog-174934495.jpg"></img>
        </div>
        </div>
        <div className="volreq">
            <div className="volreq1">
                <h3>Requirements for Non Medical Volunteers</h3>
                <ul><li>Volunteers must be 18 yrs and older </li>
<li>Respect all animals, staff, working hours, regulations</li>
<li>Must volunteer for a minimum of 2 weeks</li>
<li>willing to do any of the assigned duties</li></ul>
            </div>
            <div className="volreq1">
                <h3>Requirements for Medical Volunteers</h3>
                <ul><li>Must have completed a minimum of 3 years of Vet school
 </li>
<li>Must volunteer for a minimum of 2 weeks</li>
<li>Must be willing to share information as well as learn</li>
<li>willing to do any of the assigned duties</li></ul>
            </div>
        </div>
        </div>
   );
}