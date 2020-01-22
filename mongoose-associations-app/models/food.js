let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let foodSchema = new Schema({
  name: {
    type: String,
    default: ""
  },

  ingredients: [{
      //ingredients array will hold object ids (_id)
    type: Schema.Types.ObjectId,
    ref: 'Ingredient'
  }]
});

let Food = mongoose.model("Food", foodSchema);

module.exports = Food