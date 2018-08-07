const cowsay = require("cowsay");
const express = require('express');
const userRoutes = require('./routes/user');
const bodyParser = require('body-parser');
require('dotenv').config({path: 'server/.env'})

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(userRoutes);


app.listen(process.env.PORT || 3000, () => console.log(cowsay.say({
	text : `API server listening on ${process.env.PORT || 3000} port`,
	e : "oO",
	T : "U "
})));
