const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();
// app.use(express.json());
app.use(express.static('public'))
app.use(cors())

app.get('/hello', (req, res) => {
    res.status(200).send('hello world')
});

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images/uploads')
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({ storage })

app.post('/upload', upload.single('image'), (req, res) => {
  if (req.file)
    res.json({
      imageUrl: `images/uploads/${req.file.filename}`
    });
  else 
    res.status("409").json("No Files to Upload.")
});

app.listen(8000, () => {
    console.log('\n============== RUNNING ON PORT 8000 ===============\n')
});


