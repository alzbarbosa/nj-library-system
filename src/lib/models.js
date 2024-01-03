import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Define the Rating schema
const ratingSchema = new mongoose.Schema({
  total_score: {
    type: String,
    required: true,
  },
  total_ratings: {
    type: String,
    required: true,
  },
  average_rating: {
    type: String,
    required: true,
  },
});

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    year_publish: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    number_copies: {
      type: String,
      required: true,
    },
    number_available: {
      type: String,
      required: true,
    },
    rating: {
      type: ratingSchema,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Book = mongoose.models?.Book || mongoose.model("Book", bookSchema);
export const Rating =
  mongoose.models?.Rating || mongoose.model("Rating", ratingSchema);
