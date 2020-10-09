
const faunadb = require('faunadb');
const showRiddleTemplate = require('./showRiddleTemplate.js');
require('dotenv').config();

const q = faunadb.query;
const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
});

exports.handler = (event, context, callback) => {
    let hostName = event.headers.host || 'foosinvite.vip';
    const path = event.queryStringParameters.id.replace("/", "");

    client.query(
        q.Get(q.Match(q.Index("riddle_by_path"), path))
    ).then(response=>{
        return callback(null, {
            statusCode: 200,
            body: showRiddleTemplate({...response.data, hostName})
        });
    }).catch(error=>{
        console.log('Error:', error);
        return callback(null, {
            body: JSON.stringify(error),
            statusCode: 301,
            headers: {
                Location: '/noriddleforyou/index.html'
            }
        })
    })
}