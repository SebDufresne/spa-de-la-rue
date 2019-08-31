// Imports: Axios
import axios from "axios";
// GraphQL: Resolvers

const users =[
  {
    id: 1, 
    firstName: 'Bob', 
    lastName: 'poulet'
  }, 
  {
    id: 2, 
    firstName: 'Bobbbb', 
    lastName: 'chicken'
  }
]

const resolvers = {
  Query: {
    users: ()=>{
      return users;
    }
  }
};
// Exports
export default resolvers;
