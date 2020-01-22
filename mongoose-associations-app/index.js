const express = require('express');
const app = express();
const mongoose = require("mongoose");

const mongoURI = 'mongodb://localhost:27017/mongoRelationships';

mongoose.connect(mongoURI, { useNewUrlParser: true }, () => {
  console.log('the connection with mongod is established')
})

app.listen(3000, () => {
  console.log('listening');
});
