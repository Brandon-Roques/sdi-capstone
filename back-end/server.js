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
        .then(data => res.status(200).json(data))
})

app.get('/items', (req, res) => {
    knex
        .select('*')
        .from('items')
        .then(data => res.status(200).json(data))
        .catch(err =>
            res.status(404).json({
                message:
                    'The data you are looking for could not be found. Please try again.'
            }))
})

//this is for all the items of a specific user
app.get('/userr/:id', (req, res) => {
    const userid = req.params.id; 
    knex
        .select('*')
        .from('items')
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
            const ids = await knex('users').where("userid", req.params.id);
            res.status(201).json(ids); // respond back to request
        })
        .catch(err =>
            res.json({
                message:
                    'The user information could not be updated.'
            })
        );
})

app.listen(port, () => console.log(`Server listening on port ${port}`))