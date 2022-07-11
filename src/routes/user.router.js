const express = require("express");
const router = express.Router();

const {
  allUsers,
  createUser,
  deleteUser,
  updateUser,
  getUser,
} = require("../controllers/user.controller");

// Routes for  creating a new user and getting all users
router.route("/").post(createUser).get(allUsers);

// getting a particular user by id
router.route("/:id").get(getUser);

// routes for deleting a user
router.route("/delete/:id").delete(deleteUser);
router.route("/update/:id").put(updateUser);

module.exports = router;
