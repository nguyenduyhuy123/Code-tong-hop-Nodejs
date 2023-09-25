const express = require('express');
const path = require('path');

const bai6 = express();

bai6.use(express.static(path.join(__dirname, 'public')));

bai6.listen(5000, () => {
  console.log('Server is running on port 5000');
});