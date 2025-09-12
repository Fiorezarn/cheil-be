const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
 destination: 'storage/',
 filename: (req, file, cb) => {
  const uniqueName = Date.now() + '-' + file.originalname;
  cb(null, uniqueName);
 },
});

const upload = multer({ storage });
module.exports = upload;
