import React from "react";
import { Row, Col, Empty, Typography, } from "antd";
import styles from "@/styles/pages/wishlist.module.scss";
import { useSelector } from "react-redux";
import { type RootState } from "@/app/store";
import ProductCard from "@/Components/Products/ProductCard";
import ForYou from "@/Components/common/ForYou";
import SEO from "@/Components/SEO";

const { Title } = Typography;


const WishlistPage: React.FC = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist.items);

  return (
    <>
      <SEO
        title="My Wishlist | Exclusive"
        description="Save your favorite items to your Exclusive wishlist and view them anytime."
        url="/wishlist"
      />
      <div className={styles.wishlistPage}>
        <div className="container">
          <Title level={3} className={styles.titleRegular}>
            Wishlist ({wishlist.length})
          </Title>

          {wishlist.length === 0 ? (
            <Empty
              description="Your wishlist is empty"
              className={styles.empty}
            />
          ) : (
            <Row gutter={[24, 24]} className={styles.wishlistGrid}>
              {wishlist.map((product) => (
                <Col
                  key={product.id}
                  xs={24}
                  md={10}
                  lg={8}
                  xl={6}
                >
                  <ProductCard product={product} prefrences={{ hidePreviewBtn: true, hoverable: false }} />
                </Col>
              ))}
            </Row>
          )}

          <ForYou />
        </div>
      </div>
    </>
  );
};

export default WishlistPage;
