const express = require('express');
const userRoutes = require('./routes/user');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(userRoutes);


app.listen(3000, () => console.log('API server listening on 3000 port'));
