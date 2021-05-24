const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: [true, "Cannot be left blank"],
      match: [/\S+@\S+\.\S+/, "Please enter a valid email"],
      index: true,
    },
    hash_password: {
      type: String,
      required: true,
    },
    contactNumber: { type: String },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    profilePicture: { type: String },
  },
  { timestamps: true }
);

userSchema.virtual("password").set(function (password) {
  this.hash_password = bcrypt.hashSync(password, 10);
});

userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

userSchema.methods = {
  authenticate: function (password) {
    return bcrypt.compareSync(password, this.hash_password);
  },
};

userSchema.plugin(uniqueValidator, { message: "Already taken." });

module.exports = mongoose.model("User", userSchema);
