const EventEmitter = require('events');
const fs = require('fs').promises;

class FileEmitter extends EventEmitter {}

const fileEmitter = new FileEmitter();

const filePath = './public/file.txt';

fs.readFile(filePath, 'utf8')
  .then((data) => {
    fileEmitter.emit('open', filePath);
    return fs.writeFile(filePath, data.toUpperCase());
  })
  .then(() => {
    fileEmitter.emit('close', filePath);
  })
  .catch((error) => {
    fileEmitter.emit('error', error);
  });

fileEmitter.on('open', (filePath) => {
  console.log(`File ${filePath} đã được mở thành công.`);
});

fileEmitter.on('close', (filePath) => {
  console.log(`File ${filePath} đã được đóng thành công.`);
});

fileEmitter.on('error', (error) => {
  console.error('Đã xảy ra lỗi:', error);
});