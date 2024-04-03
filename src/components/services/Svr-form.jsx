import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Thanks from "../Thanks";
export function Svr() {
  const [state, handleSubmit] = useForm("mknlgokl");
  if (state.succeeded) {
    return <Thanks />;
  }

  return (
    <div class="registersvr">
      <div class="svrform">
        <div class="svr">
          <div class="svr-header">
            <h3>REGISTER FOR STERALIZATION/VACCINATION</h3>
          </div>
        </div>
        <form class="svr-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Email" name="email" />
          <input type="text" placeholder="Phone" name="phone" />

          <label for="option1">SERVICES YOU WANT</label>
          <select name="SERVICES" id="lang">
            <option value="vaccination">VACCINATION</option>
            <option value="sterilization">STERALIZATION</option>
          </select>
          <label for="option1">DO YOU HAVE A DOG OR CAT</label>
          <select name="type" id="lang">
            <option value="Dog">DOG</option>
            <option value="cat">CAT</option>
          </select>

          <button type="submit" disabled={state.submitting}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
