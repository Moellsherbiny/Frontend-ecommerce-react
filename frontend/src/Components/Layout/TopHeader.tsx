import styles from "../../styles/components/topHeader.module.scss"

function TopHeader() {
  return (
    <div className={styles.topHeader}>
      <div className={styles.container}>
        <div className="top-header__content">
          <p className="">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#">ShopNow</a></p>
        </div>
        <div className={styles.language}><span>English</span><i className="fa-solid fa-chevron-down"></i></div>
      </div>
    </div>
  )
}

export default TopHeader
