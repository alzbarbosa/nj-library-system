// components/Rating.js
import styles from "./rating.module.css";

import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ averageRating, totalUsersRated, maxRating = 5 }) => {
  const renderStars = () => {
    const stars = [];
    const roundedRating = Math.round(averageRating * 2) / 2; // Round to the nearest 0.5

    for (let i = 1; i <= maxRating; i++) {
      if (i <= roundedRating) {
        // Full star
        stars.push(<FaStar key={i} />);
      } else if (i - 0.5 === roundedRating) {
        // Half star
        stars.push(<FaStarHalfAlt key={i} />);
      } else {
        // Empty star
        stars.push(<FaRegStar key={i} />);
      }
    }

    return stars;
  };

  return (
    <div className={styles.container}>
      <div>{renderStars()}</div>
      <p>
        ({totalUsersRated} {totalUsersRated === 1 ? "rating" : "ratings"})
      </p>
    </div>
  );
};

export default Rating;
