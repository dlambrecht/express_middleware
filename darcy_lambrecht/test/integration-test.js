const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require(__dirname + '/../server');
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;
var origin = 'localhost:3000';
var url = '/';

describe('functionality of espress middleware', () => {
  // after(() => server.close());

  it('should be valid json', (done) => {
    request(origin)
      .post(url)
      .send('{"msg": "hello"}')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should be invalid json', (done) => {
    request(origin)
      .post(url)
      .send('{"hello"}')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(400);
        done();
      });
  });

});
