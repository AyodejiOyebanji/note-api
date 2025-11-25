const express = require("express");
const router = express.Router();
const orderCtrl = require("../controllers/order.controller");

router.get("/totals", orderCtrl.totalSpentPerUser);

module.exports = router;
