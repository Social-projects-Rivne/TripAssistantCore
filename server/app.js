const express = require('express');
const userRoutes = require('./routes/user');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host : 'localhost',
        user : 'postgres',
        password : '1234',
        database : 'tadb'
    }
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(userRoutes);
app.use(cors())

app.get('/', (req, res)=> {
    res.send(database.users);
})

app.post('/signin', (req, res) => {
   db.select('email', 'password').from('users')
    .where('email', '=', req.body.email)
    .then(data => {
        const isValid = bcrypt.compareSync(req.body.password, data[0].password);
        if (isValid) {
            return db.select('*').from('users')
              .where('email', '=', req.body.email)
              .then(user => {
                res.json(user[0].name + 'signed in succesfuly')
              })
            .catch(err => res.status(400).json('unable to get user'))
        } else {
            res.status(400).json('wrong credentials')
        }
    })
    .catch(err => res.status(400).json('wrong credentials'))
})

app.post('/register', (req, res) => {
    const { email, name, password } = req.body;
    const hash = bcrypt.hashSync(password);
    db('users')
        .returning('*')
        .insert({
            name: name,
            email: email,
            password: hash
        })
        .then(user => {
            res.json(user[0].name + 'registered succesfuly');
        })
        .catch(err => res.status(400).json('unable to join'))
})

app.listen(3000, () => console.log('API server listening on 3000 port'));


    // bcrypt.hash(password, null, null, function(err, hash) {
    //     console.log(hash);
    // })