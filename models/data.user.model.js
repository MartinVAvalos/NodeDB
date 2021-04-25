let dbORM = require('../util/sequelize.js')
const { DataTypes } = require("sequelize");
// const { set } = require('../util/sequelize.js');


function setup() {
  const User = dbORM.define('Users', {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(20),
      // allowNull defaults to true
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true
    },
    balance: {
        type: DataTypes.FLOAT
    }
  });

  // User.sync({ force: true})

  return User;
}

module.exports = setup();
// setup();

// (async () => {
//   await sequelize.sync({ force: true });
//   // Code here
// })();