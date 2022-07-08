const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDatabase = require("./config/database");

// initialize express dotenv and database
const app = express();
dotenv.config();
connectDatabase();

// iinitialize middleware and routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes/user.router"));

const port = process.env.PORT || 3000;
// starting the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
