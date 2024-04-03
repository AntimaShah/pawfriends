import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "@formspree/react";
import Thanks from "../Thanks";
export function Rescueform() {
  const [state, handleSubmit] = useForm("xleydgzw");
  if (state.succeeded) {
    return (
      <p>
        <Thanks />
      </p>
    );
  }
  return (
    <div class="registersvr">
      <div class="svrform">
        <div class="svr">
          <div class="svr-header">
            <h3>REGISTER FOR RESCUING AN ANIMAL</h3>
          </div>
        </div>
        <form class="svr-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Email" name="email" />
          <input type="text" placeholder="Phone" name="phone" />
          <input type="text" placeholder=" Your Addrees" name="address" />
          <input
            type="text"
            placeholder=" Addrees where the animal was found"
            name="animaladdress"
          />

          <label for="option1">IS IT A DOG OR CAT</label>
          <select name="type" id="lang">
            <option value="Dog">DOG</option>
            <option value="cat">CAT</option>
          </select>
          <input
            type="text"
            placeholder=" Estimated Age of the animal"
            name="animalage"
          />
          <label for="option1">Severity of the wound</label>
          <select name="type" id="lang">
            <option value="minor">MINOR</option>
            <option value="major">MAJOR</option>
            <option value="major">SEVERE</option>
          </select>

          <button>Register a Case</button>
        </form>
      </div>
    </div>
  );
}
