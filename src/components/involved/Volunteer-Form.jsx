import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { useForm } from "@formspree/react";
export function Volunteerform() {
  const [state, handleSubmit] = useForm("xeqyrnkj");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div class="registersvr">
      <div class="svrform">
        <div class="svr">
          <div class="svr-header">
            <h3>REGISTER FOR VOLUNTEER</h3>
          </div>
        </div>
        <form class="svr-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Email" name="email" />
          <input type="text" placeholder="Addrees" name="address" />
          <input type="text" placeholder="Phone" name="phone" />
          <input type="text" placeholder="AGE" name="age" />
          <label for="option1"></label>
          <select name="type" id="lang">
            <option value="gender">gender</option>
            <option value="male">MALE</option>
            <option value="female">FEMALE</option>
          </select>
          <label for="option1"></label>
          <select name="type" id="lang">
            <option value="type">TYPE OF VOLUNTEER</option>
            <option value="male">MEDICAL</option>
            <option value="female">REHAB/NON MEDICAL</option>
          </select>
          <input type="text" placeholder="AVAILABILITY" name="availibity" />{" "}
          <input type="text" placeholder="INTERESTS" name="interest" />
          <button>Register for Adoption</button>
        </form>
      </div>
    </div>
  );
}
