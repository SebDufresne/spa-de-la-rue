import React from 'react';
import Table from 'react-bootstrap';

interface volunteerItem{
  id: number
  firstName: string
  lastName: string
  status: string
}

export default function VolunteerItem(props: volunteerItem) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.status}</td>
    </tr>
  )
}
