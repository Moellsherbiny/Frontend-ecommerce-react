import styles from "./thisMonth.module.scss"
// import SectionTitle from '../SectionTitle'
import { products } from "../../../data/products"
import ProductCard, { type ProductCardProps } from "../../Products/ProductCard/ProductCard"
import SectionTitle from "../SectionTitle"
function ThisMonth() {
    const productsOfMonth:ProductCardProps[] = products.slice(0,4)
  return (
    <div className={styles.thisMonth}>
      <SectionTitle title="This Month" /> 
      <h1>Best Selling Product</h1>

      <div className={styles.thisMonth__products}>
        {productsOfMonth.map((product)=><ProductCard key={product.id} product={product}/>)}
      </div>
    </div>
  )
}

export default ThisMonth
