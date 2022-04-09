//Here we will describe the structure of the "User"

const { Schema, model } = require("mongoose");

const schema = new Schema(
   {
      String: {
         email: { type: String, required: true, unique: true },
         password: { type: String, required: true },
      },
   },
   {
      timestamps: true,
   }
);

module.exports = model("User", schema);
