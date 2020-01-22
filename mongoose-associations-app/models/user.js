let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let tweetSchema = new Schema({
  text: String,
  date: Date
});

