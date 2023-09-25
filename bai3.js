
const express = require('express');
const bai3 = express();

bai3.get('/', (req, res) => {
    res.status(200).type('text/html').send('<h1>Hello, World!</h1>');
  });

const port = process.env.PORT | 5000;

bai3.listen(port, ()=>{
    console.log(`Server is listen on port ${port}...`);
});