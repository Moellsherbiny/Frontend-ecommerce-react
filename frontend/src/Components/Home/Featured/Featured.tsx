import Services from "@/Components/common/Services/Services";
import SectionTitle from "../SectionTitle";
import styles from "./featured.module.scss";

function Featured() {
    return (
        <div className={styles.featured}>
            <SectionTitle title="Featured" />
            <div className={styles.featured__header}>

                <h1 className={styles.headingSemiBold}>New Arrival</h1>
            </div>
            <div className={styles.featured__grid}>
                <div className={styles.featured__grid__left}>
                    <img src="images/products/playstation.png" alt="PlayStation 5" />
                    <div className={styles.featured__grid__content}>
                        <h3>PlayStation 5</h3>
                        <p>Black and White version of the PS5 coming out on sale.</p>
                        <a href="#">Shop Now</a>
                    </div>
                </div>

                <div className={styles.featured__grid__right}>
                    <div className={styles.featured__grid__top}>
                        <div className={styles.featured__grid__card__image}>
                            <img src="images/woman.jpg" style={{transform:"scaleX(-1)"}} alt="Women's Collections" />
                        </div>
                        <div className={styles.featured__grid__content}>
                            <h3>Women's Collections</h3>
                            <p>Featured woman collections that give you another vibe.</p>
                            <a href="#">Shop Now</a>
                        </div>
                    </div>

                    <div className={styles.featured__grid__bottom}>
                        <div className={styles.featured__grid__card}>
                            <div className={styles.featured__grid__card__overlay}></div>
                            <div className={styles.featured__grid__card__image}>
                                <img src="images/products/speakers.png" alt="Speakers" />
                            </div>
                            
                            <div className={styles.featured__grid__content}>
                                <h3>Speakers</h3>
                                <p>Amazon wireless speakers.</p>
                                <a href="#">Shop Now</a>
                            </div>
                        </div>
                        <div className={styles.featured__grid__card}>
                            <div className={styles.featured__grid__card__overlay}></div>
                            <div className={styles.featured__grid__card__image}>

                            <img src="images/products/GUCCI-INTENSE.png" alt="Perfume" />
                            </div>
                            <div className={styles.featured__grid__content}>
                                <h3>Perfume</h3>
                                <p>GUCCI INTENSE OUD EDP.</p>
                                <a href="#">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Services/>
        </div>
    )
}

export default Featured
