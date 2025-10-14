import React from "react";
import { Card } from "antd";
import {
  ShopOutlined,
  ShoppingOutlined,
  UserOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import {Row, Col} from "antd";
import styles from "./About.module.scss";

const About: React.FC = () => {
  return (
    <div className={styles.container}>

    <div className={styles.aboutContainer}>
      {/* Story Section */}
      <div className={styles.storySection}>
        <div className={styles.text}>
          <h2>Our Story</h2>
          <p>
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast pace. Exclusive offers a diverse assortment in categories
            ranging from consumer.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <img
            src="/images/girls.jpg"
            alt="Our Story"
            className={styles.image}
          />
        </div>
      </div>

      {/* Stats Section */}
      <Row justify="space-around">
        <Col xs={{span:24}} sm={{span:24}} md={{span:12,}} lg={{ span: 5 }}>
        <Card className={styles.card}>
          <ShopOutlined className={styles.icon} />
          <h3>10.5k</h3>
          <p>Sellers active on our site</p>
        </Card>
        </Col>
        <Col xs={{span:24}} sm={{span:24}} md={{span:12,}} lg={{ span: 5}}>
        <Card className={`${styles.card} ${styles.activeCard}`}>
          <DollarCircleOutlined className={styles.icon} />
          <h3>33k</h3>
          <p>Monthly Product Sale</p>
        </Card>
        </Col>
        <Col xs={{span:24}} sm={{span:24}} md={{span:12,}} lg={{ span: 5}}>
        <Card className={styles.card}>
          <UserOutlined className={styles.icon} />
          <h3>45.5k</h3>
          <p>Customers active on our site</p>
        </Card>
        </Col>
      <Col xs={{span:24}} sm={{span:24}} md={{span:12,}}  lg={{ span: 5}}>
        <Card className={styles.card}>
          <ShoppingOutlined className={styles.icon} />
          <h3>25k</h3>
          <p>Annual gross sale in our site</p>
        </Card>
      </Col>
      </Row>

       <Row justify="center">
        <Col  md={1} lg={{span:8}} >
          <Card className={styles.card}>1</Card>
        </Col>
        <Col  md={1} lg={{span:8}} >
          <Card className={styles.card}>2</Card>

        </Col>
        <Col  md={1} lg={{span:8}}>
          <Card className={styles.card}>3</Card>
          
        </Col>
  </Row>
    </div>
    </div>

  );
};

export default About;
