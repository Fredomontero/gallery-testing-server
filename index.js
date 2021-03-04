var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

const graphqlSchema = require('./graphql/schemas/index');
const graphqlResolvers = require('./graphql/resolvers/index');
 
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  rootValue: graphqlResolvers,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');