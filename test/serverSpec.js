const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const chai = require('chai');
const expect = chai.expect;
const db = require('../database/index.js');

describe('Cat', function() {
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
