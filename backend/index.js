const express = require("express");
const graphqlHTTP = require("express-graphql");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: MyGraphQLSchema,
    graphql: true
  })
);

app.listen(4000);
