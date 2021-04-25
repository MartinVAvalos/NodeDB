let dbORM = require('../util/sequelize.js')
const { DataTypes } = require("sequelize");
const { set } = require('../util/sequelize.js');


function setup() {
  const User = dbORM.define('User', {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(20),
      // allowNull defaults to true
    },
    balance: {
        type: DataTypes.FLOAT
    }
  });

  User.sync({ force: true})

  return User;
}

module.exports = setup;


// (async () => {
//   await sequelize.sync({ force: true });
//   // Code here
// })();