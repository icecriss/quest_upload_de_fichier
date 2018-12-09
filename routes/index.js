const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'File upload'
  });
});

/* POST Forms 101 */
router.post('/forms-:id', (req, res) => {
  const id = req.params.id;
  const getElt = req.query.level;
  const postElt = req.body;
  console.log('parametre de l\'URL:', id);
  console.log('requete GET:', getElt);
  console.log('requete POST:', postElt);
  res.json({ id, postElt, getElt })
});


const multer = require('multer');
const path = require('path');

// Set Storage Engine
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  }
})

// Init upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 3 * 1024 * 1024 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
}).array('myfile', 3);

// Check File type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /png/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

router.post('/monupload', (req, res) => {
  upload(req, res, (err) => {
    console.log('test')
    if (err) {
      console.log(err)
      res.render('index', {
        msg: err
      });
    } else {
      console.log('autre test');
      console.log(req.files)
      let message = '';
      if (req.files.length === 1) {
        message = '1 file uploaded';
      } else if (req.files.length > 1) {
        message = req.files.length + ' files uploaded';
      } else {
        message = 'you may have forgotten to select a file';
      }
      res.render('index', {
        msg: message,
        // imgUrl: `uploads/${req.files.filename}`
      });
    }
  })
})

module.exports = router;