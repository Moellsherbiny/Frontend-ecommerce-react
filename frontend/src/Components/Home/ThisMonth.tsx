import { useEffect, useState } from "react"
import styles from "@/styles/components/Home/thisMonth.module.scss"
import { getBestSellingProducts } from "@/data/products"
import ProductCard from "@/Components/Products/ProductCard"
import { type ProductCardProps } from "@/types/product/productCard"
import SectionTitle from "./SectionTitle"
import ProductCardSkeleton from "@/Components/Products/ProductCardSkeleton"

function ThisMonth() {
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState<ProductCardProps[]>([])
  const productsOfMonth: ProductCardProps[] = products.slice(0, 4)

  useEffect(() => {
    setIsLoading(true)
    const fetchProducts = async () => {
      const data = await getBestSellingProducts()
      setProducts(data)
      setIsLoading(false)
    }
    fetchProducts()
  }, [])

  return (
    <div className={styles.thisMonth}>
      <SectionTitle title="This Month" />
      <h1 className={styles.headingSemiBold}>Best Selling Product</h1>
      {isLoading && <ProductCardSkeleton count={4} />}
      <div className={styles.thisMonth__products}>
        {productsOfMonth.map((product) => <ProductCard key={product.id} product={product} prefrences={{ hoverable: true }} />)}
      </div>
    </div>
  )
}

export default ThisMonth
