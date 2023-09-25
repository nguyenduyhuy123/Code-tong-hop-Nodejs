const http = require('http');

const server = http.createServer((req, res) => {
  // Lấy phần URL sau tên miền
  const url = req.url;

  // Thiết lập mã trạng thái và kiểu nội dung
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Gửi nội dung đáp ứng về trình duyệt
  res.write(`<h1>URL: ${url}</h1>`);
  res.end();
});

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});