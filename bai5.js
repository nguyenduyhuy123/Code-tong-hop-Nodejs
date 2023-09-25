const express = require('express');
const bai5 = express();

bai5.get('/', (req, res) => {
  // Lấy các tham số từ yêu cầu
  const params = req.query;

  // Tạo đáp ứng dựa trên các tham số
  let response = '<h1>Request Parameters:</h1>';
  response += '<ul>';
  for (const key in params) {
    response += `<li>${key}: ${params[key]}</li>`;
  }
  response += '</ul>';

  // Gửi nội dung đáp ứng về trình duyệt
  res.send(response);
});

//ví dụ: http://localhost:5000?name=Huy&age=24

bai5.listen(5000, () => {
  console.log('Server is running on port 5000');
});