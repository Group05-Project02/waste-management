// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

// get accces of .env file
require('dotenv').config();

// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

// export updated sequelize
module.exports = sequelize;