const cowsay = require("cowsay");
const express = require('express');
const userRoutes = require('./routes/user');
const signupRoutes = require('./routes/signup');
const signinRoutes = require('./routes/signin');
const tripsRoutes = require('./routes/trips');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config({path: 'server/.env'})


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(userRoutes);
app.use(signupRoutes);
app.use(signinRoutes);
app.use(tripsRoutes);

app.listen(process.env.PORT || 3000, () => console.log(cowsay.say({
	text : `API server listening on ${process.env.PORT || 3000} port`,
	e : "oO",
	T : "U "
})));
