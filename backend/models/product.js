const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product Name"],
      trim: true,
      maxLength: [100, "Product Name cannot exceed 100 characters"],
    },
    price: {
      type: Number,
      required: [true, "Please enter Price"],
      maxLength: [5, "Product price cannot exceed 5 digit"],
      default: 0.0,
    },
    description: {
      type: String,
      required: [true, "Please enter product description"],
    },
    ratings: {
      type: Number,
      default: 0,
    },
    images: [
      {
        public_id: {
          type: String,
          required: [true, "Please enter image id"],
        },
        url: {
          type: String,
          required: [true, "Please enter image URL"],
        },
      },
    ],
    category: {
      type: String,
      required: [true, "Please select category"],
      enum: {
        values: [
          "Electronics",
          "Economics",
          "Camera",
          "Laptop",
          "Accessories",
          "Food",
          "Headphones",
          "Books",
          "Clothes/Shoes",
          "Beauty/Health",
          "Sports",
          "Outdoor",
          "Home",
        ],
        message: "please select correct category",
      },
    },
    seller: {
      type: String,
      required: [true, "Please enter product seller"],
    },
    stock: {
      type: Number,
      required: [true, "Please enter stock"],
      maxLength: [5, "Product length cannot exceed 5 characters"],
      default: 0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        name: {
          type: String,
          required: true,
        },
        ratings: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", productSchema);
