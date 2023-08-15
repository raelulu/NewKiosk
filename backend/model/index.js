const Sequelize = require("sequelize");
const config = require("../config/config")["development"];

const db = {};

// DB 연결
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Menu = require("./Menu")(sequelize, Sequelize);
db.Payment = require("./Payment")(sequelize, Sequelize);

module.exports = db;
