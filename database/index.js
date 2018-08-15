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

module.exports.Cat = Cat;

module.exports.save = save;

/*


// console.log('data here:', data);
  let catNameFromData = data[3].last;
  let ownerEmailFromData = data[2].last;
  let imageUrlFromData = data[1].last;
  let adoptionMessageFromData = data[0].last;
  // console.log(catName, ownerEmail, imageUrl, adoptionMessage);
  Cat.insert({
    catName: catNameFromData,
    ownerEmail: ownerEmailFromData,
    imageUrl: imageUrlFromData,
    adoptionMessage: adoptionMessageFromData
  });









*/
