const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: process.env.USERNAME /* not sure what my username is  */,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DBPORT,
  database: "todoapp",
});

module.exports = pool;
