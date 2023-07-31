const express = require('express');
var controllerMenu = require('../controller/Cmenu');
var controllerPayment = require('../controller/Cmenu');
const router = express();

// router.get('/admin', controllerMenu.admin_main);
// router.get('/admin', controllerMenu.admin);
router.get('/getMenuList', controllerMenu.getMenuList);
router.post('/addMenu', controllerMenu.addMenu);
router.post('/selectMenu', controllerMenu.selectMenu);
router.patch('/menuUpdate', controllerMenu.menuUpdate);
router.delete('/menuDelete', controllerMenu.menuDelete);
router.post('/merchant_uid', controllerPayment.merchant_uid);

module.exports = router;
