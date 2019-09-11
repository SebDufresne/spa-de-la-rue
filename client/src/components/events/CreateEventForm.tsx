import React, { useState } from "react";

import { useMutation, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { EventSummary } from "./types";
import { ActivePartner } from "../partners/types";
import { ActiveVolunteer } from "../volunteers/types";
import DatePicker from "react-datepicker";
import { Modal, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import "styles/createEventForm.scss";

import useHookData from "hooks/useFormData";
import moment from "moment";

import ChooseRadio from "components/form/ChooseRadio";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const dateFix = (setDate: any): any => {
  if (setDate) {
    const date = new Date(setDate);

    return date.setDate(date.getDate() + 1);
  }
  return new Date(setDate);
};

const ADD_EVENT = gql`
  mutation addEvent(
    $administrator_id: Int!
    $partner_id: Int!
    $address_id: Int!
    $name: String!
    $description: String!
    $start_date: String!
    $end_date: String!
    $day_of_week: Int!
    $frequency: String!
    $start_time: String!
    $end_time: String!
    $hours_of_work: Int!
    $therapist_needed: Int!
    $color: String!
    $google_coords_X: Float!
    $google_coords_Y: Float!
  ) {
    addEvent(
      administrator_id: $administrator_id
      partner_id: $partner_id
      address_id: $address_id
      name: $name
      description: $description
      start_date: $start_date
      end_date: $end_date
      day_of_week: $day_of_week
      frequency: $frequency
      start_time: $start_time
      end_time: $end_time
      hours_of_work: $hours_of_work
      therapist_needed: $therapist_needed
      color: $color
      google_coords_X: $google_coords_X
      google_coords_Y: $google_coords_Y
    ) {
      administrator_id
      partner_id
      address_id
      name
      description
      start_date
      end_date
      day_of_week
      frequency
      start_time
      end_time
      hours_of_work
      therapist_needed
      color
      google_coords_X
      google_coords_Y
    }
  }
`;

interface ActivePartnerList {
  active_partners: ActivePartner[];
  active_volunteers: ActiveVolunteer[];
}

const GET_ACTIVE_PARTNERS = gql`
  query getPartnerList {
    active_partners {
      id
      name
      address_id
      google_coords_X
      google_coords_Y
    }
    active_volunteers {
      id
      first_name
      last_name
    }
  }
`;

export default function CreateEventForm(this: any) {
  const {
    state,
    setAdministrator,
    setPartner,
    setName,
    setDescription,
    setStartDate,
    setEndDate,
    setDayOfWeek,
    setFrequency,
    setStartTime,
    setEndTime,
    setHoursOfWork,
    setTherapistNeeded,
    setColor
  } = useHookData();

  const [show, setShow] = useState(false);
  const [toList, setToList] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  // const [addEvent] = useMutation(ADD_EVENT, {
  //   variables: state });

  const [addEvent] = useMutation(ADD_EVENT);

  const { loading, error, data } = useQuery<ActivePartnerList>(
    GET_ACTIVE_PARTNERS
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (toList) {
    return (
      <React.Fragment>
        <Redirect to="/clinics" />
      </React.Fragment>
    );
  }

  if (data) {
    console.log(state);
    return (
      <div className="container">
        <h3 className="text-center">Create an Event</h3>
        <form onSubmit={event => event.preventDefault()}>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label>Partner Name: </label>
              <select
                value={state.partner_id}
                className="form-control"
                onChange={e => {
                  setPartner(parseInt(e.target.value), data.active_partners);
                }}
                name="partner"
              >
                {data.active_partners.map(partner => (
                  <option value={partner.id} key={partner.id}>
                    {partner.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label>Event Name: </label>
              <input
                name="name"
                className="form-control "
                type="text"
                placeholder="name"
                value={state.name}
                onChange={e => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <ChooseRadio
              legend="Time period"
              options={[
                "AM - 10h00 à 12h00",
                "PM - 14h00 à 16h00",
                "Soir - 19h00 à 21h00"
              ]}
              getValue={(e: { target: { value: string } }) => {
                switch (e.target.value) {
                  case "AM - 10h00 à 12h00":
                    setStartTime("10:00:00");
                    setEndTime("12:00:00");
                    break;
                  case "PM - 14h00 à 16h00":
                    setStartTime("14:00:00");
                    setEndTime("16:00:00");
                    break;
                  case "Soir - 19h00 à 21h00":
                    setStartTime("19:00:00");
                    setEndTime("21:00:00");
                    break;
                }
              }}
            />
            <div className="form-group col-md-6">
              <label>Administrator Name: </label>
              <select
                value={state.administrator_id}
                onChange={e => {
                  setAdministrator(parseInt(e.target.value));
                }}
                name="volunteer"
              >
                {data.active_volunteers.map(volunteer => (
                  <option value={volunteer.id} key={volunteer.id}>
                    {`${volunteer.first_name} ${volunteer.last_name}`}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-row mt-3">
            <div className="form-group col-md-6">
              <label>Hours Of Volunteering: </label>
              <input
                type="number"
                name="hours_of_work"
                className="form-control"
                value={state.hours_of_work}
                onChange={e => setHoursOfWork(parseInt(e.target.value))}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Numbers of Therapist: </label>
              <input
                type="number"
                name="therapist_needed"
                className="form-control"
                value={state.therapist_needed}
                onChange={e => setTherapistNeeded(parseInt(e.target.value))}
              />
            </div>
          </div>
          <div className="form-row">
            <ChooseRadio
              legend="choose a color for the event: "
              options={["red", "blue", "green"]}
              getValue={(e: { target: { value: string } }) => {
                switch (e.target.value) {
                  case "red":
                    setColor("clinic-color-pink-1");
                    break;
                  case "blue":
                    setColor("clinic-color-blue-1");
                    break;
                  case "green":
                    setColor("clinic-color-green-1");
                    break;
                }
              }}
            />
            <div className={"react-calendar__tile my-auto btn " + state.color}>Color example</div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-12">
              <label>Description: </label>
              <textarea
                name="description"
                className="form-control"
                rows={4}
                onChange={e => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Start Date: </label>
              <DatePicker
                inline
                selected={dateFix(state.start_date)}
                onChange={e => {
                  if (e) {
                    setDayOfWeek(e.getDay());
                    setStartDate(moment(e).format("YYYY-MM-DD"));
                  }
                }}
              />
            </div>
            <div className="form-group col-md-6">
              <label>End Date: </label>
              <DatePicker
                inline
                selected={dateFix(state.end_date)}
                onChange={e => {
                  if (e) {
                    setEndDate(moment(e).format("YYYY-MM-DD"));
                  }
                }}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Frequency?</label>
              <select
                value={state.frequency}
                onChange={e => setFrequency(e.target.value)}
              >
                <option value="once">once</option>
                <option value="weekly">weekly</option>
                <option value="bi-weekly">bi-weekly</option>
                <option value="monthly">monthly</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              {/* <button onClick={() => addEvent({ variables: state })}>
                Create Event
              </button> */}
              <Button variant="primary" onClick={handleShow}>
                Create Event
              </Button>

              <Modal className="confirm-modal" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Create Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to create this event?</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => {
                      console.log('confirm')
                      addEvent({ variables: state });
                      handleClose();
                      setToList(true);
                    }}
                  >
                    Confirm
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </form>
      </div>
    );
  }
  return <p>Loading...</p>;
}
