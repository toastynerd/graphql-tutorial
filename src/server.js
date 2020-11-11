const { GraphQLServer } = require('graphql-yoga');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const server = module.exports = new GraphQLServer({
  typeDefs,
  resolvers
});

