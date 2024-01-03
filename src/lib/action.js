"use server";

import { signIn, signOut } from "./auth";
import { User } from "./models";
import { dbConnect } from "./utils";
import bcrypt from "bcryptjs";
import { Book, Rating } from "./models";
import { revalidatePath } from "next/cache";

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};

export const register = async (prevData, formData) => {
  "use server";

  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    // return "Passwords do not match"
    return { error: "Passwords do not match" };
  }

  try {
    dbConnect();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("saved to db");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const login = async (prevData, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);

    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err; //next-redirect error
  }
};

export const addBook = async (prevData, formData) => {
  "use server";

  const {
    title,
    author,
    year_publish,
    description,
    number_copies,
    number_available,
    slug,
  } = Object.fromEntries(formData);

  try {
    dbConnect();

    // Create a default rating object
    const defaultRating = new Rating({
      total_score: 0,
      total_ratings: 0,
      average_rating: 0,
    });

    const newBook = new Book({
      title,
      author,
      year_publish,
      description,
      number_copies,
      number_available,
      rating: defaultRating,
      slug,
    });

    await newBook.save();
    console.log("saved to db");
    //revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
