const{
    createPool


} = require('mysql');

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "ziyad123",
    database: "airport",
    connectionLimit: 10
})

pool.query(`SELECT * FROM airport.passenger;`, function(err, result, fields) {
    if (err) {
        return console.log(err);
    }
    return console.log(result);
});


module.exports = pool;