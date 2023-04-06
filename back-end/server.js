const express =  require('express');
const port = 4000;
const app = express();
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
const cors = require('cors');

app.use(express.json())
app.use(cors())

app.get('/users', (req, res) => {
    knex
        .select('*')
        .from('users')
        .orderBy('userid')
        .then(data => res.status(200).json(data))
})

app.get('/items', (req, res) => {
    knex
        .select('*')
        .from('items')
        .orderBy('id')
        .then(data => res.status(200).json(data))
        .catch(err =>
            res.status(404).json({
                message:
                    'The data you are looking for could not be found. Please try again.'
            }))
})

//this is for all the items of a specific user
app.get('/user/:id', (req, res) => {
    const userid = req.params.id; 
    knex
        .select('*')
        .from('items')
        .orderBy('id')
        .where('userid', userid)
        .then(data => res.status(200).json(data))
        .catch(err =>
            res.status(404).json({
                message:
                    'The data you are looking for could not be found. Please try again.'
            }))
})

//update user information
app.patch('/user/:id', (req, res) => {
    const userid = req.params.id;
    const body  = req.body;
    console.log('body', body)
    knex 
        .select('*')
        .from('users')
        .where('userid', userid)
        .update(body)
        .then(async function (result) {
            const userinfo = await knex('items').where("userid", req.params.id);
            res.status(201).json(userinfo); // respond back to request
        })
        .catch(err =>
            res.json({
                message:
                    'The user information could not be updated.'
            })
        );
})

//add new item
app.post('/additem/:id', (req, res) => {
    const userid = req.params.id;
    const body = req.body;
    knex
        .select('*')
        .from('items')
        .insert(body)
        .then(async function (result) {
            const allitems = await knex('items').where("userid", userid);
            res.json(allitems); // respond back to request
        })
        .catch(err =>
            res.json({
                message:
                    'The user information could not be updated.'
            })
        );
})

//delete item
app.delete('/item/:id', (req, res) => {
    const id = req.params.id;
    const userid = req.body;
    knex
        .select('*')
        .from('items')
        .where('id', id)
        .del()
        .then(async function (result) {
            const allitems = await knex('items').where(userid);
            res.json(allitems); // respond back to request
        })
        .catch(err =>
            res.json({
                message:
                    'The user information could not be updated.'
            })
        );
})

//update specific item
app.patch('/item/:id', (req, res) => {
    const userid = req.params.id;
    const body = req.body;
    knex
        .select('*')
        .from('items')
        .where('id', body.id)
        .update(body)
        .then(async function (result) {
            const iteminfo = await knex('items').where("userid", userid);
            res.status(201).json(iteminfo); // respond back to request
        })
        .catch(err =>
            res.json({
                message:
                    'The user information could not be updated.'
            })
        );
})

//add a new user
app.post('/signup', (req, res) => {
    const body = req.body;
    knex 
        .select('*')
        .from('users')
        .insert(body)
        .then(async function (result) {
            const users = await knex('users');
            res.json(users); // respond back to request
        })
        .catch(err =>
            res.json({
                message:
                    'The user information could not be updated.'
            })
        );
})

app.listen(port, () => console.log(`Server listening on port ${port}`))