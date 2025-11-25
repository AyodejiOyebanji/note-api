require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../src/models/user.model");   
const Order = require("../src/models/order.model");

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);


  await User.deleteMany({});
  await Order.deleteMany({});

  const alice = await User.create({ name: "Alice", email: "alice@example.com",password:'123456789' });
  const bob = await User.create({ name: "Bob", email: "bob@example.com",password:'123456789'  });

  await Order.create([
    { userId: alice._id, amount: 100, status: "completed" },
    { userId: alice._id, amount: 150, status: "completed" },
    { userId: bob._id, amount: 200, status: "completed" },
    { userId: bob._id, amount: 300, status: "pending" },
  ]);

  console.log("Seed completed");
  mongoose.disconnect();
}

seed();
