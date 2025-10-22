import styles from "./flashSales.module.scss"
import ProductCard from "../../Products/ProductCard/ProductCard"
import { products } from "../../../data/products"
import { useHorizontalScroll } from "../../../hooks/scrollHooks/useHorizontalScroll"
import { ScrollButtonBackward, ScrollButtonForward, HorizontalScroll } from "../ScrollButtons/ScrollButtons"
import SectionTitle from "../SectionTitle"
function FlashSales() {
    const { isAtEnd, isAtStart, scrollRef, scroll } = useHorizontalScroll()
    return (
        <section className={styles.flashSales}>
            <SectionTitle title="Today's" />
            <div className={styles.flashSales__header}>
                <div className={styles.flashSales__title}>
                    <h2 className={styles.headingSemiBold}>Flash Sales</h2>
                </div>

                <div className={styles.flashSales__timer}>
                    <div>
                        <span>Days</span>
                        <h3>03</h3>
                    </div>
                    <span>:</span>
                    <div>
                        <span>Hours</span>
                        <h3>23</h3>
                    </div>
                    <span>:</span>
                    <div>
                        <span>Minutes</span>
                        <h3>19</h3>
                    </div>
                    <span>:</span>
                    <div>
                        <span>Seconds</span>
                        <h3>56</h3>
                    </div>
                </div>

                <HorizontalScroll>
                    <ScrollButtonBackward disabled={isAtStart} onClick={() => scroll("left")} />
                    <ScrollButtonForward disabled={isAtEnd} onClick={() => scroll("right")} />
                </HorizontalScroll>
            </div>

            <div className={styles.flashSales__grid} ref={scrollRef}>
                {products.slice(0, 6).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className={styles.flashSales__footer}>
                <button className={styles.flashSales__btn}>View All Products</button>
            </div>
        </section>
    )
}

export default FlashSales
