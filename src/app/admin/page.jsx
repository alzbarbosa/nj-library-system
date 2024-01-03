import { Suspense } from "react";
import styles from "./admin.module.css";
import { auth } from "@/lib/auth";
import AdminBookForm from "@/components/AdminBookForm/AdminBookForm";
import Book from "@/components/book/Book";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/admin", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const AdminPage = async () => {
  const session = await auth();
  const books = await getData();

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <AdminBookForm />
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <div className={styles.books}>
          {books.map((book) => (
            <div key={book._id} className={styles.book}>
              <Book {...book} />
            </div>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default AdminPage;
