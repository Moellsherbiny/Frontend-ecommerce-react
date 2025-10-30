import styles from "./flashSales.module.scss"
import ProductCard from "@/Components/Products/ProductCard"
import { type ProductCardProps } from "@/types/product/productCard"
import { getFlashSaleProducts } from "@/data/products"
import { useHorizontalScroll } from "../../../hooks/scrollHooks/useHorizontalScroll"
import { ScrollButtonBackward, ScrollButtonForward, HorizontalScroll } from "../ScrollButtons/ScrollButtons"
import SectionTitle from "../SectionTitle"
import { Link } from "react-router"
import { useEffect, useState } from "react"
import ProductCardSkeleton from "@/Components/Products/ProductCardSkeleton"
import { formatTwoDigits, useCountdown } from "@/hooks/useCountDown"



function FlashSales() {
    const { isAtEnd, isAtStart, scrollRef, scroll } = useHorizontalScroll()
    const [isloading, setIsLoading] = useState(true)
    const [products, setProducts] = useState<ProductCardProps[]>([]);
    const flashSaleEndTime: string = new Date(Date.now() + 72 * 60 * 60 * 1000).toString();
    const [days, hours, minutes, seconds] = useCountdown(flashSaleEndTime);
    useEffect(() => {
        setIsLoading(true)
        const fetchProducts = async () => {
            const data = await getFlashSaleProducts();
            setProducts(data)
            setIsLoading(false)
        }
        fetchProducts()
    }, [])
    return (
        <section className={styles.flashSales}>
            <SectionTitle title="Today's" />
            <div className={styles.flashSales__header}>
                <div className={styles.flashSales__title}>
                    <h2 className={styles.headingSemiBold}>Flash Sales</h2>

                    <div className={styles.flashSales__title__timer}>
                        <div>
                            <span>Days</span>
                            <h3>{formatTwoDigits(days)}</h3>
                        </div>
                        <span>:</span>
                        <div>
                            <span>Hours</span>
                            <h3>{formatTwoDigits(hours)}</h3>
                        </div>
                        <span>:</span>
                        <div>
                            <span>Minutes</span>
                            <h3>{formatTwoDigits(minutes)}</h3>
                        </div>
                        <span>:</span>
                        <div>
                            <span>Seconds</span>
                            <h3>{formatTwoDigits(seconds)}</h3>
                        </div>
                    </div>
                </div>

                <HorizontalScroll>
                    <ScrollButtonBackward isAtStart={isAtStart} onClick={() => scroll("left")} />
                    <ScrollButtonForward isAtEnd={isAtEnd} onClick={() => scroll("right")} />
                </HorizontalScroll>
            </div>

            {isloading && <ProductCardSkeleton count={4} />}
            <div className={styles.flashSales__grid} ref={scrollRef}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} prefrences={{ hoverable: true }} loading={isloading} />
                ))}
            </div>

            <div className={styles.flashSales__footer}>
                <Link to="/products">
                    <button className={styles.flashSales__btn}>View All Products</button>
                </Link>
            </div>
        </section>
    )
}

export default FlashSales
