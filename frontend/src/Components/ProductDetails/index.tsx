import { Row, Col } from "antd";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import ProductOptions from "./ProductOptions";
import ProductActions from "./ProductActions";
import ProductDeliveryInfo from "./ProductDeliveryInfo";
import styles from "@/styles/pages/productDetails.module.scss";
import { useState } from "react";
import type { Product } from "@/types/product/product";

type Props = {
  product: Product;
};

const ProductDetails: React.FC<Props> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.thumbnail);

  return (
    <div className={styles.productDetails}>
      <div className={styles.container}>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={15}>
            <ProductImages
              product={product}
              mainImage={mainImage}
              setMainImage={setMainImage}
            />
          </Col>

          <Col xs={24} md={9}>
            <ProductInfo product={product} />
            <ProductOptions
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
            <ProductActions quantity={quantity} setQuantity={setQuantity} id={product.id} name={product.name} price={product.price} thumbnail={product.thumbnail}/>
            <ProductDeliveryInfo />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductDetails;
