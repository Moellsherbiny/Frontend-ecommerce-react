import styles from "./productCard.module.scss"
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Rating from "../Rating";
export type ProductCardProps = {
    id: number,
    name: string,
    category: string,
    price: number,
    inStock: boolean,
    sizes?: string[],
    oldPrice?: number,
    discount?: number,
    description: string,
    colours?: string[],
    rating: number,
    reviews: number,
    isNew: boolean,
    quantity: number,
    delivery: {
        freeDelivery: boolean,
        returnPolicy: string
    },
    image: string
}

function ProductCard({ product }: { product: ProductCardProps }) {
    return (
        <div className={styles.productCard}>
            <div className={styles.product}>
                <div className={styles.actions}>
                    {product.discount && (
                        <div className={styles.discount} >
                            <span className={styles.titleRegular}>
                                -{product.discount}%
                            </span>

                        </div>
                    )}
                    <div className={styles.icons}>
                        <button>
                            <FaRegHeart size={16} />
                        </button>
                        <button>
                            <MdOutlineRemoveRedEye size={16} />
                        </button>
                    </div>
                </div>
                <div className={styles.productImage}>
                    <img src={`images/products/${product.image}`} alt="" />
                </div>
                <button
                onClick={()=>console.log(`add to cart product id is ${product.name}`)}
                className={styles.buttonContainer}>
                    Add to Cart
                </button>
            </div>
            <div className={styles.productInfo}>
                <h5 className={styles.titleMedium}>
                    {product.name}
                </h5>
                <div className={styles.price}>
                    <h5 className={styles.titleMedium}>${product.price}</h5>
                    {product.oldPrice && (
                        <del className={styles.oldPrice}>
                            ${product.oldPrice}
                        </del>
                    )}
                </div>
                <div className={styles.rating}>
                    <Rating rating={product.rating} reviews={product.reviews} />
                </div>
            </div>
        </div>
    )
}

export default ProductCard
