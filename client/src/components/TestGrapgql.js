import React from 'react'
import {Query} from 'react-apollo'
import {gql} from 'apollo-boost'

const Test_Query = gql`
  {
    user(id: 1) {
      id, 
      first_name, 
      last_name
    }
  }
`

export default function TestGrapgql() {
  return (
    <Query query={Test_Query}>
      {({data: {user}, loading})=>{
        return <p>
          {user.first_name}
        </p>
      }}
    </Query>
  )
}
