import { Row, Col, Skeleton, Card, Space, Divider } from "antd";
import styles from "@/styles/components/ProductDetails/Skeleton.module.scss";


const ProductDetailsSkeleton = () => {
  return (
      <div className={styles.container}>
    <div className={styles.productDetails}>
        <Row gutter={[32, 32]}>
          {/* الصور */}
          <Col xs={24} md={12}>
            <div className={styles.imageSection}>
              <div className={styles.thumbnails}>
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton.Image key={i} className={styles.thumb} active />
                ))}
              </div>
              <Skeleton.Image className={styles.mainImage} active />
            </div>
          </Col>

        
          <Col xs={24} md={12}>
            <Card className={styles.detailsCard}>
              <Skeleton.Input className={styles.titleSkeleton} active />
              <Divider/>
              <Skeleton active paragraph={{ rows: 3 }} />

              <div className={styles.buttons}>
              <Space>
                <Skeleton.Button active />
                <Skeleton.Button active />
              </Space>
              </div>

              <Skeleton.Input className={styles.priceSkeleton} active />
             
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
