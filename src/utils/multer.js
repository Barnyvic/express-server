const multer = require("multer");
const path = require("path");

// multer configuration
module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let extname = path.extname(file.originalname);
    if (
      extname !== ".png" &&
      extname !== ".jpg" &&
      extname !== ".jpeg" &&
      extname !== ".gif" &&
      extname !== ".svg"
    ) {
      return cb(new Error("Only images are allowed"), false);
    } else {
      cb(null, true);
    }
  },
});
