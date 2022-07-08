const User = require("../models/usermodule");

const NewYear = [];

// Creating a new user
const createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    console.log(`this are the users: ${user}`);
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

//Creating a new user
const allUsers = (req, res) => {
  const newuser = req.body;
  NewYear.push(newuser);
  res.send(NewYear);
  console.log(NewYear);
};

module.exports = { allUsers, createUser };
