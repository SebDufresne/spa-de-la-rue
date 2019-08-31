import React from 'react';
import 'components/Application.scss';
import useApplicationData from 'hooks/useApplicationData'

export default function Application() {
  
  const {state} = useApplicationData();


  const userList = state.users.map(user=> <li key={user.id}>{user.first_name} {user.last_name} {user.email}</li>)

  return (
    <div className="App">

    <h1>List of users</h1>

    <ul>
      {userList}
    
    </ul>

    </div>
  );
};