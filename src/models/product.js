const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
    },
    fabric: [
      {
        type: String,
      },
    ],
    sizes: [
      {
        type: String,
      },
    ],
    color: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    offer: { type: Number },
    productPictures: [{ img: { type: String } }],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    updatedAt: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
