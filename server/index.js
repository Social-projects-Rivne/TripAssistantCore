const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello from express API server!'))

app.listen(3000, function () {
  console.log('API server listening on 3000 port');
});
