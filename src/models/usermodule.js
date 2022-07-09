const mongoose = require("mongoose");

// Creating User schema

const userSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      autoIncrement: true,
    },
    firstName: {
      type: String,
      required: [true, "can't be blank"],
      minlength: 3,
      maxlength: 16,
      match: [/^[a-zA-Z0-9]+$/, "is invalid"],
    },
    lastName: {
      type: String,
      required: [true, "can't be blank"],
      minlength: 3,
      maxlength: 16,
      match: [/^[a-zA-Z0-9]+$/, "is invalid"],
    },
    age: {
      type: Number,
      required: [true, "can't be blank"],
      min: 0,
      max: 150,
    },
    email: {
      type: String,
      required: [true, "can't be blank"],
      minlength: 3,
      maxlength: 255,
      match: [/\S+@\S+\.\S+/, "is invalid"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
