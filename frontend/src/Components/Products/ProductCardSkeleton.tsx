import { Skeleton, Row, Col, Space } from "antd";

const SkeletonProducts = ({ count = 4 }) => {
  return (
    <Row gutter={[16, 16]}>
      {Array.from({ length: count }).map((_, i) => (
        <Col xs={24} sm={12} md={6} key={i}>
          <div>
            <Space direction="vertical" style={{ width: "100%" }}>
              <Skeleton.Image active style={{ width: "270px ", height: 200, borderRadius: 8, display: "flex" }} />
              <Skeleton active title={false} paragraph={{ rows: 3 }} />
            </Space>

          </div>
        </Col>
      ))}
    </Row>
  );
};

export default SkeletonProducts;