const { Payment, Menu } = require("../model");

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
