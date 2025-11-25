const OrderService = require("../services/order.service");

exports.totalSpentPerUser = async (req, res, next) => {
  try {
    const result = await OrderService.getTotalSpentPerUser();
    res.json(result);
  } catch (err) {
    // next(err);
     res.status(500).json({ error: "Internal server error" });
  }
};
