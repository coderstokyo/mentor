const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.use('/public', express.static(__dirname + '/public'));
app.use('/dist', express.static(__dirname + '/dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
