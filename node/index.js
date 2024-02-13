const express = require('express');
const app = express();
const mysql = require('mysql');


app.get('/', (req, res) => {
    res.send(`<h1>Full Cycle Rocks!</h1><br>-`);
  });
  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
