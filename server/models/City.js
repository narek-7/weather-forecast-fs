const { Schema, model } = require("mongoose");

const schema = new Schema(
   {
      name: { type: String, required: true, unique: true },
      location: { type: String, required: true },
      temperatures: { type: String, required: true },
      hour: { type: String, required: true },
   },
   {
      timestamps: true,
   }
);

module.exports = model("User", schema);
