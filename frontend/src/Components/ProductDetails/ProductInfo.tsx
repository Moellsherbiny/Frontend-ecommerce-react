import { Typography } from "antd";
import Rating from "@/Components/Products/Rating";
import styles from "@/styles/pages/productDetails.module.scss";
import type { Product } from "@/types/product/product";

const { Title, Paragraph } = Typography;

const ProductInfo: React.FC<{ product: Product }> = ({ product }) => (
  <>
    <Title level={3}>{product.name}</Title>
    <div className={styles.rating}>
      <Rating rating={product.rating} withReviews={true} reviews={product.reviews} />
      <span style={{color: product.inStock ? "#00FF66" : "gray"}}>
        {product.inStock ? "In Stock" : "Out of Stock"}
      </span>
    </div>
    <Title level={4} className={styles.price}>${product.price}</Title>
    <Paragraph className={styles.description}>{product.description}</Paragraph>
  </>
);

export default ProductInfo;
