import React, {useEffect, useReducer} from 'react';
import axios from 'axios';
import { type } from 'os';

const SET_USERS = 'SET_USERS';
  
const dataReducer = (state, action) =>{

  const actions ={

    SET_USERS: {
      ...state,
      users: action.users
    }

  }

  if (!actions[action.type]) {
    throw new Error('Type of action not found');
  }
  return actions[action.type];
}

const useApplicationData = () => {

  const [state, dispatch] = useReducer(dataReducer, {users: []})

  useEffect(() => {
    axios
      .get('/api/users')
      .then(result => dispatch({type: SET_USERS, users: result.data}))
      .catch(error => console.log(error))
  }, [])

	return {
		state,
		dispatch,
	};

}

export default useApplicationData;