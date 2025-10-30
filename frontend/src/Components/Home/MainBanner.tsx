
import {formatTwoDigits, useCountdown} from "@/hooks/useCountDown";
import styles from "@/styles/components/Home/mainBanner.module.scss";

const MainBanner = () => {
  const endTime: string = new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toString();
  
  const time = new Date().getTime()
  console.log(time);
  const sale = useCountdown(endTime);
  const [days, hours, minutes, seconds] = sale;
  return (
    <section className={styles.banner}>
      <div className={styles.banner__content}>
        <span className={styles.banner__category}>Categories</span>
        <h2 className={styles.banner__title}>Enhance Your Music Experience</h2>

        <div className={styles.banner__timer}>
          <div>
            <h3>{formatTwoDigits(hours)}</h3>
            <span>Hours</span>
          </div>
          <div>
            <h3>{formatTwoDigits(days)}</h3>
            <span>Days</span>
          </div>
          <div>
            <h3>{formatTwoDigits(minutes)}</h3>
            <span>Minutes</span>
          </div>
          <div>
            <h3>{formatTwoDigits(seconds)}</h3>
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

export default MainBanner;
