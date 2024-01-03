import { Book } from "@/lib/models";
import { dbConnect } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    dbConnect();

    const books = await Book.find();
    return NextResponse.json(books);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};
