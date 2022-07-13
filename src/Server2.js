const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDatabase = require("./config/database");

// initialize express dotenv
dotenv.config();
const app = express();
connectDatabase();

// initialize middleware and routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router
app.use(require("./routes/imageUpload.router"));

app.listen(4000, () => {
  console.log("Server is running on port 4000".red.inverse.bold);
});
