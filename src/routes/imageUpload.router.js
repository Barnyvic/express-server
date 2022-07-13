const express = require("express");
const router = express.Router();
const cloudinary = require("../utils/cloudinary");
const Upload = require("../utils/multer");
const imageUpload = require("../models/imagemodule");

// creating a Post request for the image upload

router.post("/", Upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const Image = new imageUpload({
      name: req.body.name,
      avatar: result.secure_url,
      cloudenaryId: result.public_id,
    });
    await Image.save();
    res.send(Image);
  } catch (error) {
    res.json({ error });
  }
});

module.exports = router;
