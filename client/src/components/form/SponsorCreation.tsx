import React from 'react'
import SmallInput from "./SmallInput";

export default function SponsorCreation() {
  return (
    <div className="container">
      <form>
        <div className="form-row">
          <SmallInput
            name="name"
            type="name"
            placeholder="name"
            label="name"
          />
          <SmallInput
            name="description"
            type="description"
            placeholder="description"
            label="description"
          />
        </div>
        <div className="form-row">
          <SmallInput
            name="pic"
            type="text"
            placeholder="pic"
            label="pic url"
          />
          <SmallInput
            name="sponsor"
            type="text"
            placeholder="sponsor"
            label="sponsor url"
          />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  )
}
