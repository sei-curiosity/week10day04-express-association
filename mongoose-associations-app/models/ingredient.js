let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ingredientSchema = new Schema({
  name: {
    type: String,
    default: ""
  },
  origin: {
    type: String,
    default: ""
  }
})

let Ingredient = mongoose.model("Ingredient", ingredientSchema);

module.exports = Ingredient