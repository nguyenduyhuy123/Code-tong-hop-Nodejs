const express = require('express');
const bai7 = express();

const port = 8080;

bai7.get('/', (req, res) => {
  const { host, pathname, search } = req;
  res.send(`Host: ${host}\nPathname: ${pathname}\nSearch: ${search}`);
  
  console.log(host);
  console.log(pathname);
  console.log(search);
  
});

bai7.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});