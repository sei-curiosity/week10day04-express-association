let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let Food = require('./models/food');
let Ingredient = require('./models/ingredient');

const mongoURI = 'mongodb://localhost/mongoRelationships';
mongoose.connect(mongoURI, { useNewUrlParser: true }, () => {
  console.log('the connection with mongod is established')
});