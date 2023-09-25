const express = require('express');

const bai4ex = express();

bai4ex.get('*', (req, res) => {
  // Lấy phần URL sau tên miền
  const url = req.originalUrl;

  // Trả về phần URL trong đáp ứng
  res.send(`<h1>URL: ${url}</h1>`);
});

bai4ex.listen(5000, () => {
  console.log('Server is running on port 5000');
});