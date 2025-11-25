const Order = require("../models/order.model");

async function getTotalSpentPerUser() {
  const result = await Order.aggregate([
    // Only completed orders
    { $match: { status: "completed" } },

    // Group by userId and sum amount
    {
      $group: {
        _id: "$userId",
        totalSpent: { $sum: "$amount" },
      },
    },

    // Join with users collection to get user name
    {
      $lookup: {
        from: "users",       
        localField: "_id",
        foreignField: "_id",
        as: "user",
      },
    },

    // Flatten the joined array
    { $unwind: "$user" },

    // Format output
    {
      $project: {
        userId: "$_id",
        name: "$user.name",
        totalSpent: 1,
        _id: 0,
      },
    },
  ]);

  return result;
}

module.exports = { getTotalSpentPerUser };
