const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  cloudenaryId: {
    type: String,
  },
});

const ImageUpload = mongoose.model("ImageUpload", imageSchema);

module.exports = ImageUpload;
