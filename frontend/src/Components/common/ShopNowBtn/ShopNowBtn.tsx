import { Link } from "react-router";
import styles from "./shopNowBtn.module.scss";


function ShopNowBtn({showArrow}:{showArrow?:boolean}) {
  return (
    <Link to="/products">
     <button className={styles.shopNowBtn}>
        <span>ShopNow</span>
        {showArrow && 
        <svg
          className="mt-1 "
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.5 12H20M20 12L13 5M20 12L13 19"
            stroke="#FAFAFA"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        }
      </button>
      </Link>
  )
}

export default ShopNowBtn
