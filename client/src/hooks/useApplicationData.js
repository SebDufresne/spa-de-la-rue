import {useEffect, useReducer} from 'react';
import axios from 'axios';

import {
  reducer,
  SET_USERS
} from 'reducers/application';

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, {users: []})

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