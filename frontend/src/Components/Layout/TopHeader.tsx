import { useState } from "react"
import styles from "../../styles/components/topHeader.module.scss"

function TopHeader() {
  const [isVisibile, setIsVisibile] = useState(false)
  return (
    <div className={styles.topHeader}>
      <div className={styles.container}>
          <p className={styles.titleRegular}>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a className={styles.shopNow} href="#">ShopNow</a></p>
        
        <div className={styles.topHeader__lang}>
          <button className={styles.topHeader__lang__btn} onClick={()=>{setIsVisibile(!isVisibile)}}>
            English <i className="fa-solid fa-chevron-down"></i>
          </button>
          <ul className={`${styles.topHeader__lang__list} ${isVisibile ? styles.active : ""}`}>
            <li>
              <a href="/">English</a>
            </li>
            <li>
              <a href="/">Arabic</a>
            </li>

          </ul>
        </div>
      
      </div>
    </div>
  )
}

export default TopHeader
