import { Book } from "@/lib/models";
import { dbConnect } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;

  try {
    dbConnect();

    const book = await Book.findOne({ slug });
    console.log(book);
    return NextResponse.json(book);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};
