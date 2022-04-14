const { Schema, model } = require("mongoose");
const City = require("./City");

const schema = new Schema(
   {
      userCity: [{ type: Schema.Types.ObjectId, ref: City }],
   },
   { timestamps: true }
);

module.exports = model("CityUser", schema);
