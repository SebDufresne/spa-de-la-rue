import React from "react";

import { PartnerSummary } from "./types";

export default function Partner(partners: PartnerSummary) {
  const { name, description, picture_url } = partners;

  return (
    <main className="appointment__card appointment__card--error">
      <div className="row my-5">
        <img
          className="appointment__error-close col-md-6"
          src={picture_url}
          alt={name}
        />
        <div className="col-md-6">
          <h2>{name}</h2>
          <p className="text-left">{description}</p>
        </div>
      </div>
    </main>
  );
}
