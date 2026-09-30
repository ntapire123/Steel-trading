require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { PositionModel } = require("./models/PositionModel");
const { HoldingsModel } = require("./models/HoldingsModel");
const { OrderModel } = require("./models/OrderModel");
const { createSecretToken } = require("./utils/createSecretToken");
const authRoute = require("./routes/AuthRoute");
const cookieParser = require("cookie-parser");
const { requireAuth } = require("./Middlewares/AuthMiddleware");

const app = express();
const PORT = process.env.port || 3002;
const uri = process.env.MONGODB_URI;


async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.error("MongoDB Connection Failed:", err.message);
    process.exit(1);
  }
}

connectDB();



app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);


app.use(express.json());   
app.use(cookieParser()); 
app.use("/", authRoute)

app.post("/newOrder", requireAuth, async (req, res) => {


    const order = await OrderModel.create({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
      userId: req.userId,
    });

    if (req.body.mode === "BUY") {
      const existing = await HoldingsModel.findOne({
        userId: req.userId,
        name: req.body.name,
      });
      if (!existing) {
        await HoldingsModel.create({
          name: req.body.name,
          qty: req.body.qty,
          avg: req.body.price,
          price: req.body.price,
          net: "0",
          day: 0,
          userId: req.userId,
        });
      } else {
        const oldQty = existing.qty;
        const buyQty = Number(req.body.qty);
        const buyPrice = Number(req.body.price);
        const newQty = oldQty + buyQty;
        existing.qty = newQty;
        existing.avg = (oldQty * existing.avg + buyQty * buyPrice) / newQty;
        existing.price = buyPrice;
        await existing.save();
      }
    }
    res.status(201).json({ success: true, order });
  
});

app.get("/orders", requireAuth, async (req, res) => {
  const orders = await OrderModel.find({ userId: req.userId });
  res.json(orders);
});

app.get("/holdings" , requireAuth , async(req,res)=>{
  const holdings = await HoldingsModel.find({userId: req.userId});
  res.json(holdings);
})

app.listen(PORT, () => {
  console.log(`App has started on port ${PORT}`);
});
