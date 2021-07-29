// import model
const User = require('./User');
const Product = require('./Product');

// create associations
User.hasMany(Product, {
    foreignKey: 'user_id'
  });
  
Product.belongsTo(User, {
    foreignKey: 'user_id'
});

// export model
module.exports = { User, Product };
