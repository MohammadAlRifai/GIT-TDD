const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const chai = require('chai');
const expect = chai.expect;
const db = require('../database/index.js');
const server = require('../server/index.js');

const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

describe('Server', function() {
  describe('/POST cats', () => {
    it('it should POST new cat', done => {
      let cat = [
        { last: 'here new cat' },
        { last: 'www.asdasd.com' },
        { last: 'a@yahoo.com' },
        { last: 'new cat' }
      ];
      chai
        .request(server)
        .post('/cats')
        .send(cat)
        .end((err, res) => {
          // console.log(res);
          if (res.status === 200 && res.text === 'add new cat sucess') {
            done();
          }
        });
    });
  });
  describe('/GET cats', () => {
    it('it should GET all the cats', done => {
      chai
        .request(server)
        .get('/cats')
        .end((err, res) => {
          // console.log(res);
          if (res.status === 200 && res.body.length > 0) {
            done();
          }
        });
    });
  });
});

describe('DataBase', function() {
  describe('#save()', function() {
    it('should save without error', function(done) {
      var cat = new db.Cat({
        catName: 'catName',
        ownerEmail: 'ownerEmail',
        imageUrl: 'imageUrl',
        adoptionMessage: 'adoptionMessage'
      });
      cat.save(function(err) {
        if (err) done(err);
        else done();
      });
    });
  });
});
