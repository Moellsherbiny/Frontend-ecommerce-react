import styles from "@/styles/components/Product/productCard.module.scss"
import { FaRegHeart } from "react-icons/fa";
import { ShoppingCartOutlined } from "@ant-design/icons"
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Rating from "./Rating";
import { type ProductCardProps } from "@/types/product/productCard";
import { addToCart } from "@/features/products/cartSlice";
import { addToWishlist, removeFromWishlist } from "@/features/products/wishlistSclice";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "@/app/store";
import { TbTrash } from "react-icons/tb";
import { Skeleton, Space } from "antd";
import { Link } from "react-router";
import Colors from "./Color";

type CardPrefProps = {
    withActions?: boolean,
    hidePreviewBtn?: boolean,
    hideWishlistBtn?: boolean
    hoverable?: boolean
}

function ProductCard({ product, prefrences, loading = false }: { product: ProductCardProps, prefrences?: CardPrefProps, loading?: boolean }) {
    const dispatch = useDispatch<AppDispatch>();
    const handleAddToCart = () => {
        dispatch(
            addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                thumbnail: product.thumbnail,
                quantity: 1,
            })
        );

        console.log(`Added to cart: ${product.name}`);
    };
    const wishlist = useSelector((state: RootState) => state.wishlist.items);
    const isInWishlist = wishlist.some((item) => item.id === product.id);

    const handleWishlistToggle = () => {
        if (isInWishlist) {
            dispatch(removeFromWishlist(product.id));

        } else {
            dispatch(addToWishlist(product));
        }
    };



    if (loading) {
        return (
            <div>
                <Space direction="vertical" style={{ width: "100%" }}>
                    <Skeleton.Image active style={{ width: "270px ", height: 200, borderRadius: 8, display: "flex" }} />
                    <Skeleton active title={false} paragraph={{ rows: 3 }} />
                </Space>

            </div>
        );
    }
    return (
        <div className={styles.productCard}>
            <div className={styles.product}>
                <div className={styles.actions}>
                    <div className={styles.badges}>
                        {product.isNew && (
                            <div className={`${styles.badge} ${styles.new}`}>
                                <span className={styles.titleRegular}>New</span>
                            </div>
                        )}
                        {product.discount && (
                            <div className={`${styles.badge} ${styles.discount}`} >
                                <span className={styles.titleRegular}>
                                    -{product.discount}%
                                </span>
                            </div>
                        )}
                    </div>

                    <div className={styles.icons}>
                        {prefrences?.hideWishlistBtn ? null :
                            <button onClick={handleWishlistToggle}>
                                {isInWishlist ?
                                    <TbTrash />
                                    :
                                    <FaRegHeart size={16} />
                                }
                            </button>
                        }
                        {!prefrences?.hidePreviewBtn &&
                            <Link to={`/products/${product.id}`}>
                                <button>
                                    <MdOutlineRemoveRedEye size={16} />
                                </button>
                            </Link>
                        }
                    </div>

                </div>
                <div className={styles.productImage}>
                    <img src={product.thumbnail} alt="" />
                </div>
                <button
                    onClick={handleAddToCart}
                    style={prefrences?.hoverable ? {} : { bottom: "0px" }}
                    className={styles.buttonContainer}>
                    <span>
                        <ShoppingCartOutlined />
                    </span>
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
                {product.colours && 
                    <Colors colors={product.colours} onClick={(color) => console.log(color)} />
                }
            </div>
        </div>
    )
}

export default ProductCard
