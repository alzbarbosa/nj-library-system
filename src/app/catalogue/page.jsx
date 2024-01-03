// import { books } from "@/lib/data";
import styles from "./catalogue.module.css";
import Book from "@/components/book/Book";

//import { getBooks } from "@/lib/dataMongo";

// FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/catalogue", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const Catalogue = async () => {
  const books = await getData();

  return (
    <div className={styles.container}>
      {books.map((book) => (
        <div key={book._id} className={styles.book}>
          <Book {...book} />
        </div>
      ))}
    </div>
  );
};

export default Catalogue;
