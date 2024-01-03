import Link from "next/link";
import Image from "next/image";
import Rating from "../rating/Rating";
import styles from "./book.module.css";

const Book = ({
  _id,
  title,
  author,
  year_publish,
  description,
  number_available,
  rating,
  slug,
}) => {
  console.log("Book Component Props:", { _id, title, author });
  return (
    <div className={styles.book}>
      <Link className={styles.link} href={`/catalogue/${slug}`}>
        <div className={styles.coverImage}>
          {/* Adjust the width and height based on your design */}
          <Image
            src="/book.jpg"
            alt={title || "empty image"}
            width={150}
            height={200}
          />
        </div>
      </Link>

      <div className={styles.bookInfo}>
        <h3 className={styles.title}>{title}</h3>
        <Rating
          averageRating={rating.average_rating}
          totalUsersRated={rating.total_ratings}
        />

        <div className={styles.bookDetails}>
          <p>
            <strong>Author:</strong> {author}
          </p>
          <p>
            <strong>Year of Publication:</strong> {year_publish}
          </p>
        </div>
        <div className={styles.description}>
          <p>
            <strong>Description:</strong> {description}
          </p>
        </div>
        <div>
          <p>
            <strong>Available:</strong> {number_available}{" "}
            {number_available > 1 ? "copies" : "copy"}
          </p>
          <div className={styles.buttons}>
            <button className={styles.button}>Place hold</button>
            <button className={styles.button}>Favorite</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;

/*
<Rating
          averageRating={rating.average_rating}
          totalUsersRated={rating.total_ratings}
        />
        */
