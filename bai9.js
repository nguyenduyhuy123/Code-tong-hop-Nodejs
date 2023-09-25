const EventEmitter = require('events');
const fs = require('fs');

class FileEmitter extends EventEmitter {}

const fileEmitter = new FileEmitter();

// Đường dẫn đến file mà bạn muốn mở
const filePath = './public/file.txt';

fs.open(filePath, 'r', (err, fd) => {
  if (err) {
    fileEmitter.emit('error', err);
    return;
  }

  fileEmitter.emit('open', filePath);
});

fileEmitter.on('open', (filePath) => {
  console.log(`File ${filePath} đã được mở thành công.`);
});

fileEmitter.on('error', (error) => {
  console.error('Đã xảy ra lỗi khi mở file:', error);
});
