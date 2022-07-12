const express = require("express");
const router = express.Router();
//  From user.controller.js
const {
  allUsers,
  createUser,
  deleteUser,
  updateUser,
  getUser,
} = require("../controllers/user.controller");

const {
  CreatePost,
  getPost,
  singlePost,
  updatePost,
  deletePost,
} = require("../controllers/Blog.controller");

// Routes for  creating a new user and getting all users
router.route("/").post(createUser).get(allUsers);
router.route("/blog").post(CreatePost).get(getPost);

// getting a particular user by id
router.route("/:id").get(getUser);
router.route("/blog/:id").get(singlePost);

// routes for deleting a user
router.route("/delete/:id").delete(deleteUser);
router.route("/update/:id").put(updateUser);
router.route("/blog/update/:id").put(updatePost);
router.route("/blog/delete/:id").delete(deletePost);

// testing the blog routes

module.exports = router;
