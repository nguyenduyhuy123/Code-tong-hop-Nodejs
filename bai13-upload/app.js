const express = require('express');
const multer = require('multer');
const path = require('path');
var bodyParser = require("body-parser"); 

const app = express();
const upload = multer({ dest: 'uploads/' });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/upload', upload.single('file'), (req, res) => {
  if (req.file) {
    res.send('File uploaded successfully!');
  } else {
    res.send('No file selected!');
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});