let links = [{
  id: 'link-0',
  url: 'test.example.com',
  description: 'a test link for testing'
}];

module.exports = {
  Query: {
    info: () => "this is a clone of hacker news",
    feed: () => links,
  },
  Link: {
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url
  }  
};
