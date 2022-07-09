const User = require("../models/usermodule");

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

//Getting  all user
const allUsers = async (req, res) => {
  try {
    const users = await (
      await User.find()
    ).map((user) => {
      return {
        id: user._id,
        Name: user.firstName.concat(" ", user.lastName),
        Age: user.age,
        Email: user.email,
      };
    });
    res.send(users);
  } catch (error) {
    res.status(400).send(error);
  }
};

// deleting a user

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Updating a user

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { allUsers, createUser, deleteUser, updateUser };
