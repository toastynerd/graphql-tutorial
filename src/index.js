const { GraphQLServer } = require('graphql-yoga');
const typeDefs = require('./schema.js');


const resolvers =  {
  Query: {
    info: () => "this is a clone of hacker news"
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => console.log('server up a running'));
