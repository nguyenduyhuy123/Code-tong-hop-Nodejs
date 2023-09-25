
const express = require('express');
const bai2 = express();

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();
const hour = today.getHours();
const minute = today.getMinutes();

console.log(`
        Clock from Vietnam:
             Date: ${day}-${month}-${year}
             Time: ${hour} : ${minute}`);

bai2.get('/', function(request, response) {
response.send(`
    <h1> Clock from Vietnam: </h1> </br>
     Date: ${day}-${month}-${year} </br>
     Time: ${hour} : ${minute}`);
});
             
const port = process.env.PORT | 5000;

bai2.listen(port, ()=>{
    console.log(`Server is listen on port ${port}...`);
});