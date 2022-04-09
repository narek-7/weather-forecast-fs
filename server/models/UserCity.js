const { Schema, model } = require("mongoose");

const schema = new Schema(
   {
      String: [{ type: String }],
   },
   { timestamps: true }
);

module.exports = model("CityUser", schema);
