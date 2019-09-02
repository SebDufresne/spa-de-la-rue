import React from "react";

export default function CreateVolunteer() {
  return (
    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="form-group col-md-6">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
          />
        </div>
      </div>
    </form>
  );
}
