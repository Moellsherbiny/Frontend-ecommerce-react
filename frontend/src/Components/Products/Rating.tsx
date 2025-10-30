import styles from "@/styles/components/Product/rating.module.scss"
import { Rate } from "antd";

type RatingProps = {
  rating: number
  withReviews?: boolean
  reviews?: number,
  allowRate?: boolean
}

function Rating({ rating, withReviews = false, reviews = 0, allowRate = false}: RatingProps) {

  return (
    <div className={styles.rating}>
      <Rate allowHalf defaultValue={rating}  disabled={!allowRate} />
      {reviews &&
        <span className={styles.reviews}>
          ({reviews}{withReviews && "  reviews"})
        </span>
      }
    </div>
  )
}

export default Rating
