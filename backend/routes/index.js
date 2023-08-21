const express = require("express");
var controllerMenu = require("../controller/Cmenu");
const router = express();

router.get("/getMenuList", controllerMenu.getMenuList);
router.post("/addMenu", controllerMenu.addMenu);
router.get("/selectMenu/:name", controllerMenu.selectMenu);
router.patch("/menuUpdate", controllerMenu.menuUpdate);
router.delete("/menuDelete", controllerMenu.menuDelete);
router.post("/merchant_uid", controllerMenu.merchant_uid);
router.post("/onLogin", controllerMenu.onLogin);

module.exports = router;
