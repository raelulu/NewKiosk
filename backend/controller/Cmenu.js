const { Payment, Menu, User } = require("../model");
const db = require("../config/db");
const util = require("util");

// 메뉴 불러오기
exports.getMenuList = (req, res) => {
  Menu.findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      throw err;
    });
};

// 메뉴 추가
exports.addMenu = async (req, res) => {
  console.log("메뉴 추가 요청 : ", req.body);
  await Menu.create(req.body).then(() => {
    res.send(true);
  });
};

// 메뉴 조회
exports.selectMenu = async (req, res) => {
  await Menu.findOne({
    where: {
      name: req.params.name,
    },
  }).then((result) => {
    res.send(result);
  });
};

// 메뉴 수정
exports.menuUpdate = async (req, res) => {
  console.log("메뉴 수정 : ", req.body);
  await Menu.update(req.body, {
    where: { name: req.body.name },
  }).then(() => {
    res.send(true);
  });
};

// 메뉴 삭제
exports.menuDelete = async (req, res) => {
  console.log("메뉴 삭제 : ", req.body);
  await Menu.destroy({
    where: { name: req.body.name },
  }).then(() => {
    res.send(true);
  });
};

exports.merchant_uid = async (req, res) => {
  await Payment.create(req.body).then((result) => {
    res.send(result);
  });
};

exports.onLogin = (req, res) => {
  console.log(`= = = > req : ${util.inspect(req)}`);
  const user_id = req.query.user_id;
  const user_pw = req.query.user_pw;
  const sql1 = "SELECT COUNT(*) AS result FROM user_inform WHERE user_id = ?";
  db.query(sql1, user_id, (err, data) => {
    if (!err) {
      if (data[0].result < 1) {
        res.send({ msg: "입력하신 id 가 일치하지 않습니다." });
      } else {
        const sql2 = `SELECT 
                              CASE (SELECT COUNT(*) FROM user_inform WHERE user_id = ? AND user_pw = ?)
                                  WHEN '0' THEN NULL
                                  ELSE (SELECT user_id FROM user_inform WHERE user_id = ? AND user_pw = ?)
                              END AS userId
                              , CASE (SELECT COUNT(*) FROM user_inform WHERE user_id = ? AND user_pw = ?)
                                  WHEN '0' THEN NULL
                                  ELSE (SELECT user_pw FROM user_inform WHERE user_id = ? AND user_pw = ?)
                              END AS userPw`;
        const params = [
          user_id,
          user_pw,
          user_id,
          user_pw,
          user_id,
          user_pw,
          user_id,
          user_pw,
        ];
        db.query(sql2, params, (err, data) => {
          if (!err) {
            res.send(data[0]);
          } else {
            res.send(err);
          }
        });
      }
    } else {
      res.send(err);
    }
  });
};
