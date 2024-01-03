// components/book/BookDetail.js
import Image from "next/image";
import Rating from "../rating/Rating";

import styles from "./bookdetails.module.css";

const BookDetails = ({
  title,
  author,
  year_publish,
  description,
  number_available,
  rating,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.coverImage}>
        {/* Adjust the width and height based on your design */}
        <Image src="/book.jpg" alt={title} width={150} height={200} />
      </div>
      <h1>{title}</h1>
      <Rating
        averageRating={rating.average_rating}
        totalUsersRated={rating.total_ratings}
      />
      <p>
        <strong>Author:</strong> {author}
      </p>
      <p>
        <strong>Year of Publication:</strong> {year_publish}
      </p>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        <strong>Available:</strong> {number_available}{" "}
        {number_available > 1 ? "copies" : "copy"}
      </p>
      {/* Add any additional details or components here */}
    </div>
  );
};

export default BookDetails;
