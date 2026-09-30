const { Schema } = require("mongoose");

const OrderSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

module.exports = { OrderSchema };
