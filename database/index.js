const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/catsList');
var db = mongoose.connection;
db.on('error', function() {
  console.log('Mongoose Disconnected !');
});

db.once('open', function() {
  console.log('Mongoose Connected !');
});

let catSchema = mongoose.Schema({
  catName: String,
  ownerEmail: String,
  imageUrl: String,
  adoptionMessage: String
});

let Cat = mongoose.model('Cat', catSchema);

let save = (data, callback) => {
  console.log('db: add new cat');

  let newCat = new Cat({
    catName: data[3].last,
    ownerEmail: data[2].last,
    imageUrl: data[1].last,
    adoptionMessage: data[0].last
  });

  newCat.save((err, cat) => {
    if (err) {
      callback('error when add new cat');
    } else {
      callback('add new cat sucess');
    }
  });
};
let getAll = callback => {
  console.log('db: get all cats');
  Cat.find({}, function(err, data) {
    if (err) {
      callback('error when get all cats', err);
    } else {
      callback('get all cats sucess', data);
    }
  });
};
module.exports.Cat = Cat;
module.exports.getAll = getAll;

module.exports.save = save;
