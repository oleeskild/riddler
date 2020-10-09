const faunadb = require('faunadb');
require('dotenv').config();

const q = faunadb.query;
const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
});

module.exports = () => {
    return new Promise((resolve, reject) => {
        client.query(
            q.Paginate(q.Match(q.Ref("indexes/all_riddles")), {size: 100000})
        ).then(response=>{
            const riddles = response.data;

            console.log('Riddles to generate: ', riddles.length);

            const getAll = riddles.map(ref=>{
                return q.Get(ref);
            });
            return client.query(getAll).then(ret=>{
                resolve(ret);
            })
        }).catch(error=>{
            console.log("error", error);
            reject(error);
        });
    })
}
