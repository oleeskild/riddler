const querystring = require('querystring');
const shortid = require('shortid');
const faunadb = require('faunadb');
const axios = require('axios');
require('dotenv').config();

const q = faunadb.query;
const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
});

exports.handler = (event, context, callback) => {
    const data = querystring.parse(event.body);

    const uniquePath = shortid.generate();
    data.riddlePath = uniquePath;
    const riddle= { data };


    client.query(q.Create(q.Collection('riddles'), riddle))
        .then(response => {
            console.log('success', response);

            axios.post('https://api.netlify.com/build_hooks/5e1dff6d77168b4aa5ab6d2e')
                .then(function(response){
                    console.log(response);
                }).catch(function(error){
                    console.log(error);
                });

            return callback(null, {
                body: JSON.stringify(response),
                statusCode: 302,
                headers: {
                    Location: `/riddle/${uniquePath}`
                }
            })
        })
        .catch(error=>{
            console.log('error', error);
            return callback(null, {
                statusCode: 400,
                body: JSON.stringify(error)
            });
        })

};