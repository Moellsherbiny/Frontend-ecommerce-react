import styles from "./ourProducts.module.scss"
import { products } from "../../../data/products";
import ProductCard from "../../Products/ProductCard/ProductCard";
import { type ProductCardProps } from "../../Products/ProductCard/ProductCard";
import { Button } from "antd";
import SectionTitle from "../SectionTitle";
function OurProducts() {
  return (
    <div className={styles.ourProducts}>
        <SectionTitle title="Our Products" />
        <div className={styles.ourProducts__productsContainer} >
            {products.slice(0,8).map((product:ProductCardProps) =>
            <div key={product.id} className={styles.ourProducts__productsContainer__product}>
                <ProductCard product={product}/>
            </div>
            )   
        }
        </div>
        <div className={styles.ourProducts__btnContainer}>
            <Button className={styles.ourProducts__button} type="primary">View All Products</Button>
        </div>
    </div>
  )
}
export default OurProducts;
