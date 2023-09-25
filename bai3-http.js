const http = require('http');

const server = http.createServer((req, res) => {
  // Thiết lập mã trạng thái và kiểu nội dung
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Gửi nội dung đáp ứng về trình duyệt
  res.write('<h1>Hello, World!</h1>');
  res.end();
});

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});