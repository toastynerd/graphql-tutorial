module.exports = `
  type Query {
    info: String!
    feed: [Link!]!
  }

  type Link {
    id: ID!
    description: String!
    url: String!
  }
`
