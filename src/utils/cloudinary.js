const cloudinary = require("cloudinary");
const dotenv = require("dotenv");

dotenv.config();

// Cloudinary configuration settings
// This will be fetched from the .env file in the root directory
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

module.exports = cloudinary;
