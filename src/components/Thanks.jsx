import React from "react";

const Thanks = (props) => {
  return (
    <div className="thank-you-page">
      <h1>Thank You! </h1>
      <p>Your form has been submitted successfully.</p>
      <p>Our Team will get back to you as soon as possible </p>
      <p>
        {" "}
        Feel free to Contact us or{" "}
        <a href="tel:+9356845645">Call us on 9356845645</a>
      </p>
    </div>
  );
};

export default Thanks;
