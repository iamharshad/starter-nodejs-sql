const mysql = require("mysql2");
const { db_config } = require("../config");

const pool = mysql.createPool({
  host: db_config.host,
  user: db_config.user,
  password: db_config.password,
  database: db_config.database,
});

module.exports = pool.promise();
