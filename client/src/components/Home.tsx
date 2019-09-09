import React from "react";

export default function Home() {
  return (
    <div className="text-center">
      <img
        className="appointment__error-close img-fluid"
        src="/images/assets/site_fontPage.png"
        alt="Spa de la Rue"
      />
      <h1>Welcome to Spa de la rue!!</h1>
      <blockquote className="blockquote">
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante.
        </p>
        <footer className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
      <h2>Our Volunteers</h2>
    </div>
  );
}
