import React from "react";
import { Card } from "antd";
import {
  ShopOutlined,
  ShoppingOutlined,
  UserOutlined,
  DollarCircleOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Row, Col } from "antd";
import styles from "./About.module.scss";
import Services from "@/Components/common/Services/Services";
import IconContainer from "@/Components/common/IconContainer/IconContainer";

const { Meta } = Card;

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Tom Cruise",
    role: "Founder & Chairman",
    image: "/images/people/tom.png",
  },
  {
    id: 2,
    name: "Emma Watson",
    role: "Managing Director",
    image: "/images/people/emma.png",
  },
  {
    id: 3,
    name: "Will Smith",
    role: "Product Designer",
    image: "/images/people/will.png",
  },
];

const statsData = [
  {
    icon: <DollarCircleOutlined />,
    stat: "10.5k",
    title: "Sellers active our site"
  },
  {
    icon: <ShopOutlined />,
    stat: "33k",
    title: "Monthly Product Sale"
  },
  {
    icon: <UserOutlined />,
    stat: "45.5k",
    title: "Customers active on our site"
  },
  {
    icon: <ShoppingOutlined />,
    stat: "25k",
    title: "Annual gross sale in our site"
  }
]
const About: React.FC = () => {
  return (
    <div className={styles.container}>

      <div className={styles.aboutContainer}>
        {/* Story Section */}
        <div className={styles.storySection}>
          <div className={styles.text}>
            <h2 className={styles.headingSemiBold}>Our Story</h2>
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


        <Row className={styles.statsSection} justify="space-between">
          {statsData.map((stat) =>
            <Col key={stat.title} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12, }} lg={{ span: 5 }}>
              <Card className={styles.statsSection__card} variant="outlined">
                <IconContainer className={styles.icon} icon={stat.icon} />

                <h3>{stat.stat}</h3>
                <p>{stat.title}</p>
              </Card>
            </Col>
          )}
        </Row>

        <div className={styles.teamSection}>
          <Row justify="space-between" gutter={[24, 24]}>
            {teamData.map((member) => (
              <Col
                key={member.id}
                xs={24}
                md={12}
                lg={8}

                className={styles.col}
              >
                <Card className={styles.teamSection__card} variant="borderless"
                  cover={
                    <div className={styles.image}>
                      <img src={member.image} alt={member.name} draggable="false" />
                    </div>
                  }
                >

                  <Meta title={member.name} description={member.role} />
                  <div className={styles.socials}>
                    <a href="#"><TwitterOutlined /></a>
                    <a href="#"><InstagramOutlined /></a>
                    <a href="#"><LinkedinOutlined /></a>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div className={styles.services}>
        </div>
      </div>
      <Services />
    </div>

  );
};

export default About;
