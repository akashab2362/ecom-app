import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter product title"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
  },
  actual_price: {
    type: Number,
    required: [true, "Please enter product price"],
  },
  sizes: [
    {
      type: String,
      enum: ["S", "M", "L", "XL", "XXL"],
      required: true,
    },
  ],
  average_rating: {
    type: Number,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  brand: {
    type: String,
  },
  category: {
    type: String,
    required: [true, "Please enter product category"],
  },
  crawled_at: {
    type: Date,
    default: Date.now,
  },
  discount: {
    type: String,
  },
  images: [
    {
      type: String,
    },
  ],
  pid: {
    type: String,
  },
  product_details: [
    {
      style_code: {
        type: String,
      },
      closure: {
        type: String,
      },
      pockets: {
        type: String,
      },
      fabric: {
        type: String,
      },
      pattern: {
        type: String,
      },
      color: {
        type: String,
      },
    },
  ],
  seller: {
    type: String,
  },
  selling_price: {
    type: Number,
  },
  sub_category: {
    type: String,
  },
  url: {
    type: String,
  },
  stock: {
    type: Number,
    required: [true, "Please enter produt length"],
    maxLength: [4, "Stock cannot exceed 4 figures"],
    default: 0,
  },
  noOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
});

export const Product = mongoose.model("Product", productSchema);
