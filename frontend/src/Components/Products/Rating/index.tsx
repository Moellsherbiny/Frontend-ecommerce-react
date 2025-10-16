import { FaStar } from "react-icons/fa";
import styles from "./rating.module.scss"

type RatingProps = {
    rating:number
    withReviews?:boolean
    reviews?:number
}

function Rating({rating, withReviews=false, reviews=0}:RatingProps) {
    const percentage = (rating / 5) * 100;
    
    const stars = [];
    
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          color={percentage >= (i + 1) * 20 ? "#FFAD33" : "gray"}
          className={percentage >= (i + 1) * 5 ? "filled" : "empty"}
        />
      );
    }
    
    return (
    <div className={styles.rating}>
        {stars}
        {reviews && 
        <span className={styles.reviews}>
            ({reviews}{withReviews && "  reviews" })
        </span>
        }
    </div>
  )
}

export default Rating
