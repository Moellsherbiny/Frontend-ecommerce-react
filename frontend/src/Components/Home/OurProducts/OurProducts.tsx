import styles from "./ourProducts.module.scss"
import { getOtherProducts } from "../../../data/products";
import { type ProductCardProps } from "@/types/product/productCard";
import ProductCard from "@/Components/Products/ProductCard";
import { Button } from "antd";
import SectionTitle from "../SectionTitle";
import { Link } from "react-router";
import { useEffect, useState } from "react";
function OurProducts() {
  const [products, setProducts] = useState<ProductCardProps[]>();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const fetchProducts = async () => {
      const data = await getOtherProducts()
      setProducts(data)
      setIsLoading(false)
    }
    fetchProducts()
  }, [])
  return (
    <div className={styles.ourProducts}>
        <SectionTitle title="Our Products" />
        <h1 className={styles.headingSemiBold}>Explore Our Products</h1>
        <div className={styles.ourProducts__productsContainer} >
            {products?.slice(0,8).map((product:ProductCardProps, index) =>
            <div key={index} className={styles.ourProducts__productsContainer__product}>
                <ProductCard product={product} prefrences={{hoverable:true}}/>
            </div>
            )   
        }
        </div>
        <div className={styles.ourProducts__btnContainer}>
          <Link to="/products" className={styles.ourProducts__button}>
            <Button className={styles.ourProducts__button} type="primary">View All Products</Button>
          </Link>
        </div>
    </div>
  )
}
export default OurProducts;
