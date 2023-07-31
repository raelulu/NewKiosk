const Sequelize = require('sequelize');
const config = require('../config/config.json')['development'];

const db = {};

// DB 연결
const sequelize = new Sequelize(
  config.database,
  // config.port,
  config.username,
  config.password,
  config
);

//key value 설정
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db = {
//     "Sequelize": Sequelize,
//     "sequelize": sequelize,
//     "Menu": 'Menu.js'에서 리턴 받은 값,
// }

//정의한 모델 함수 실행하는 객체
db.Menu = require('./Menu')(sequelize, Sequelize);
db.Payment = require('./Payment')(sequelize, Sequelize);
// 첫번째 인자는 정의된 모델을 받는 인자
// 두번쨰 인자는 DataType 형태 받는 인자

module.exports = db;
