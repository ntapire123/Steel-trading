const { Schema } = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
 username: {
    type: String,
    required: [true, "Your username is required"],
  },
 password: {
    type: String,
    required: [true, "Your password is required"],
  },
    createdAt: {
    type: Date,
    default: new Date(),
  },
});


UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    next(error);
  }
});


module.exports = { UserSchema };
    