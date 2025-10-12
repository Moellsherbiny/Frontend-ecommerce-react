import React from "react";
import styles from "./mainBanner.module.scss";

const MusicBanner: React.FC = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.banner__content}>
        <span className={styles.banner__category}>Categories</span>
        <h2 className={styles.banner__title}>Enhance Your Music Experience</h2>

        <div className={styles.banner__timer}>
          <div>
            <h3>23</h3>
            <span>Hours</span>
          </div>
          <div>
            <h3>05</h3>
            <span>Days</span>
          </div>
          <div>
            <h3>59</h3>
            <span>Minutes</span>
          </div>
          <div>
            <h3>35</h3>
            <span>Seconds</span>
          </div>
        </div>

        <button className={styles.banner__btn}>Buy Now!</button>
      </div>

      <div className={styles.banner__image}>
        <img src="images/products/JBL-boombox-hero.png" alt="JBL Speaker" />
      </div>
    </section>
  );
};

export default MusicBanner;
