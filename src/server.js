const { GraphQLServer } = require('graphql-yoga');
const { PrismaClient } = require('@prisma/client');

const resolvers = require('./resolvers');
const prisma = new PrismaClient();

const server = module.exports = new GraphQLServer({
  typeDefs: __dirname + '/schema.graphql',
  resolvers,
  context: {
    prisma
  }
});

