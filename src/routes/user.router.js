const express = require("express");
const router = express.Router();

const { allUsers, createUser } = require("../controllers/user.controller");

// creating a simple route
router.route("/").post(createUser).get(allUsers);

module.exports = router;
