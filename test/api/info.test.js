const chai = require('chai');

const expect = chai.expect;
const url = 'http://localhost:4000';
const request = require('supertest')(url);

describe('GraphQL', () => {
  it('should provide an info description', (done) => {
    request.post('/')
      .send({ query: '{info}'})
      .end((err, res) => {
        if (err) return err;
        expect(res.body.data).to.be.a('object');
        expect(res.body.data.info).to.be.a('string');
        expect(res.body.data.info).to.equal('this is a clone of hacker news');
        done();
      });
  });
});
