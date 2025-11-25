const OrderService = require("../services/order.service");

exports.totalSpentPerUser = async (req, res, next) => {
  try {
    const result = await OrderService.getTotalSpentPerUser();
    res.json(result);
  } catch (err) {
    next(err);
  }
};
