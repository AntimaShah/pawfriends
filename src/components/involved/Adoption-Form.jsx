import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { useForm } from "@formspree/react";
import Thanks from "../Thanks";

export function Adoptionform() {
  const [state, handleSubmit] = useForm("xpzvjpdk");
  if (state.succeeded) {
    return <Thanks />;
  }
  return (
    <div class="registersvr">
      <div class="svrform">
        <div class="svr">
          <div class="svr-header">
            <h3>REGISTER FOR ADOPTION</h3>
          </div>
        </div>
        <form class="svr-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Email" name="email" />
          <input type="text" placeholder=" Your Addrees" name="address" />
          <input type="text" placeholder="Phone" name="phone" />

          <label for="option1">ARE YOU A PET PARENT</label>
          <select name="type" id="lang">
            <option value="yes">YES</option>
            <option value="no">NO</option>
            <option value="was">WAS</option>
          </select>
          <input
            type="text"
            placeholder="NAME OF THE ANIMAL YOU WANT TO ADOPT"
            name="interestedanimal"
          />

          <button>Register for Adoption</button>
        </form>
      </div>
    </div>
  );
}
