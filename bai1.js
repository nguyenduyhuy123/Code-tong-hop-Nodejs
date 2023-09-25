
const express = require('express');
const bai1 = express();

console.log('Hello World.');

bai1.get('/', function(request, response) {
    response.send('Hello, World!');
});

const port = process.env.PORT | 5000;

bai1.listen(port, ()=>{
    console.log(`Server is listen on port ${port}...`);
});