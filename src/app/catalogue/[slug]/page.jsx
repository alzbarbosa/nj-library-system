// import { useParams } from "next/navigation";
// import { books } from "@/lib/data";
import BookDetails from "@/components/bookDetails/BookDetails";

// FETCH DATA WITH AN API
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/catalogue/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const BookPage = async ({ params }) => {
  const { slug } = params;
  const book = await getData(slug);

  if (!book) {
    // Handle the case where the book is not found
    return <p>Book not found</p>;
  }

  return <BookDetails {...book} />;
};

export default BookPage;
