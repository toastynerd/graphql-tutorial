chai = require('chai');

const expect = chai.expect;
const url = require('./params').url;
const request = require('supertest')(url);

describe('Links', () => {
  it('should return a feed that is a list of links', (done) => {
    request.post('/')
      .send({ query: `{ 
        feed {
          id
          description
          url
        }
      }`})
      .end((err, res) => {
        if (err) return err;
        expect(res.body.data).to.be.a('object');
        expect(res.body.data.feed).to.be.a('array');
        let first = res.body.data.feed[0];
        expect(first).to.have.property('id');
        expect(first).to.have.property('description');
        expect(first).to.have.property('url');
        done();
      });
  });

  it('should be able to create a new link', (done) => {
    request.post('/')
      .send({ query: `
        mutation {
          post(
            url: "test.example.com"
            description: "a test link for testing"
          ) {
            id
          }
        
      }`})
      .end((err, res) => {
        if (err) return err;
        expect(res.body.data).to.be.a('object');
        expect(res.body.data.post).to.be.a('object');
        expect(res.body.data.post).to.have.property('id');
        done();
      });
  });
});
