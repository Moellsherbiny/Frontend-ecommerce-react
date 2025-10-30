import React, { useState } from "react";
import { useParams } from "react-router";
import { Button, Row, Col, Typography, Divider, Tag, InputNumber, Image } from "antd";
import { HeartOutlined, MinusOutlined, PlusOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import styles from "@/styles/pages/productDetails.module.scss";
// import { getProductById, getRelatedProducts } from "@/data/products";
// import type { ProductCardProps } from "@/types/product/productCard";
// import ProductCard from "@/Components/Products/ProductCard";
// import SkeletonProducts from "@/Components/Products/ProductCardSkeleton";
import Rating from "@/Components/Products/Rating";
import Delivery from "@/assets/icons/Delivery";
import ReturnIcon from "@/assets/icons/ReturnICon";

const { Title, Paragraph, Text } = Typography;
const images = [
  "Havic-HV-G-92-Gamepad/one.png",
  "Havic-HV-G-92-Gamepad/two.png",
  "Havic-HV-G-92-Gamepad/three.png",
  "Havic-HV-G-92-Gamepad/five.png",
];
const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [mainImage, setMainImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("red");
  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <div className={styles.productDetails}>
      <div className={styles.container}>
        <Row gutter={[32, 32]}>

          <Col xs={24} md={15}>
            <div className={styles.imageSection}>
              <div className={styles.thumbnails}>
                {images.map((img) => (
                  <Image
                    key={img}
                    src={`/images/products/${img}`}
                    alt="thumbnail"
                    className={`${styles.thumb} ${mainImage === img ? styles.activeThumb : ""}`}
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>
              <div className={styles.mainImage}>
                <Image src={`/images/products/${mainImage}`} alt="main product" />
              </div>
            </div>
          </Col>

        
          <Col xs={24} md={9}>
            <Title level={3}>Havic HV G-92 Gamepad</Title>

            <div className={styles.rating}>
              <Rating rating={4} withReviews={true} reviews={150} />
              <Tag color="green" >In Stock</Tag>
            </div>

            <Title level={4} className={styles.price}>$192.00</Title>

            <Paragraph className={styles.description}>
              PlayStation 5 Controller Skin High quality vinyl with air channel adhesive
              for easy bubble free install & mess free removal. Pressure sensitive.
            </Paragraph>

            {/* Colours */}
            <div className={styles.optionGroup}>
              <Text strong>Colours:</Text>
              <div className={styles.colors}>
                <span
                  className={`${styles.colorCircle} ${selectedColor === "red" ? styles.active : ""}`}
                  style={{ backgroundColor: "#ff4d4f" }}
                  onClick={() => setSelectedColor("red")}
                ></span>
                <span
                  className={`${styles.colorCircle} ${selectedColor === "blue" ? styles.active : ""}`}
                  style={{ backgroundColor: "#1677ff" }}
                  onClick={() => setSelectedColor("blue")}
                ></span>
              </div>
            </div>

            {/* Sizes */}
            <div className={styles.optionGroup}>
              <Text strong>Size:</Text>
              <div className={styles.sizes}>
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <Button
                    key={size}
                    className={`${styles.sizeBtn} ${selectedSize === size ? styles.activeSize : ""}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity + Buttons */}
            <div className={styles.actions}>
              <div className={styles.qty}>
                <Button
                  icon={<MinusOutlined />}
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                />
                <InputNumber
                  min={1}
                  value={quantity}
                  readOnly
                />
                <Button
                  icon={<PlusOutlined />}
                  onClick={() => setQuantity(quantity + 1)}
                />
              </div>

              <Button type="primary" icon={<ShoppingCartOutlined />} size="large">
                Buy Now
              </Button>

              <Button icon={<HeartOutlined />} size="large" />
            </div>

            <Divider />

            <div className={styles.delivery}>
              <div>
                <div>
                  <Delivery fontSize={21} />
                </div>
                <div>

                  <Text strong> Free Delivery</Text>
                  <Paragraph style={{ marginBottom: 0 }}>
                    Enter your postal code for Delivery Availability
                  </Paragraph>
                </div>
              </div>

              <div>
                <div>
                  <ReturnIcon />
                </div>
                <div>

                  <Text strong>Return Delivery</Text>
                  <Paragraph style={{ marginBottom: 0 }}>
                    Free 30 Days Delivery Returns. Details
                  </Paragraph>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductDetails;
