import { useEffect, useReducer } from "react";
// import axios from 'axios';
import { reducer, SET_USERS } from "reducers/application";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const Test_Query = gql`
  {
    users {
      id
      first_name
      last_name
    }
  }
`;

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, { users: [] });

  const { data, error, loading } = useQuery(Test_Query);

  useEffect(() => {
    if (!loading && !error) {
      dispatch({ type: SET_USERS, users: data.users });
    }
    if (error) console.log(error);
  }, []);

  return {
    state,
    dispatch
  };
};

export default useApplicationData;
