"use client";

import { addBook } from "@/lib/action";
import styles from "./adminBookForm.module.css";
import { useFormState } from "react-dom";

const AdminBookForm = () => {
  const [state, formAction] = useFormState(addBook, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Book</h1>
      <input type="text" placeholder="title" name="title" />
      <input type="text" placeholder="author" name="author" />
      <input type="text" placeholder="year_publish" name="year_publish" />
      <input type="text" placeholder="description" name="description" />
      <input
        type="text"
        placeholder="number_available"
        name="number_available"
      />
      <input type="text" placeholder="number_copies" name="number_copies" />
      <input type="text" placeholder="slug" name="slug" />
      <button>Add</button>
      {state?.error}
    </form>
  );
};

export default AdminBookForm;
