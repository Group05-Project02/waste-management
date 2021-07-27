// import model and sequelize db connection
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Product model
class Products extends Model {}

// define table columns and configuration
Products.init(
  {
    id: {
        // use the special Sequelize DataTypes object provide what type of data it is
        type: DataTypes.INTEGER,
        // this is the equivalent of SQL's `NOT NULL` option
        allowNull: false,
        // instruct that this is the Primary Key
        primaryKey: true,
        // turn on auto increment
        autoIncrement: true
      },
      // define a name column
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      // define an price column
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      // define a quantity column
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      // define a consumption column
      consumption: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product'
  }
);

// export user model
module.exports = Products;