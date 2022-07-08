const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected...".green.inverse.bold); //green is the color of the text, inverse is the color of the background, bold is the font style
  } catch (error) {
    console.log(error.message.red);
  }
};

module.exports = connectDatabase;
