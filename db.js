const mySql = require('mysql');
const connection = mySql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "admin@123",
        database: "emp"
    }
);
module.exports = { connection }



