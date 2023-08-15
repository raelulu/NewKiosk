const { Payment, Menu } = require("../model");

// //admin 페이지
// exports.admin = (req, res) => {
//   console.log('admin 접속');
//   res.send('dsadsa');
// };

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
  console.log("메뉴 조회 : ", req.body);
  await Menu.findOne({
    where: {
      id: req.body.id,
    },
  }).then((result) => {
    res.send(result);
  });
};

// 메뉴 수정
exports.menuUpdate = async (req, res) => {
  console.log("메뉴 수정 : ", req.body);
  await Menu.update(req.body, {
    where: { id: req.body.id },
  }).then(() => {
    res.send(true);
  });
};

// 메뉴 삭제
exports.menuDelete = async (req, res) => {
  console.log("메뉴 삭제 : ", req.body);
  await Menu.destroy({
    where: { id: req.body.id },
  }).then(() => {
    res.send(true);
  });
};

// 주문 번호 생성
// exports.merchant_uid = async (req, res) => {
//   console.log('보내3');
//   console.log('주문 번호 생성 요청 : ', req.body);
//   let data = { merchant_uid: req.body.merchant_uid };
//   await Payment.create(data).then((result) => {
//     res.send(result);
//   });
// };

exports.merchant_uid = async (req, res) => {
  await Payment.create(req.body).then((result) => {
    res.send(result);
  });
};

// exports.merchant_uid = async (req, res) => {
//   const { imp_uid, merchant_uid } = req.body;
// };
