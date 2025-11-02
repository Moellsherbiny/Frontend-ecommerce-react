import { Card } from "antd";

import { Row, Col } from "antd";
import styles from "@/styles/pages/about.module.scss";
import Services from "@/Components/common/Services/Services";
import IconContainer from "@/Components/common/IconContainer/IconContainer";
import { RiInstagramLine, RiLinkedinLine, RiTwitterLine  } from "react-icons/ri";


import MoneyBag from "@/assets/icons/MoneyBag"
import Dollar from "@/assets/icons/Dollar.tsx"
import {Shop} from "@/assets/icons/Shop"
import ShoppingBag from "@/assets/icons/ShoppingBag"
import Breadcrumbs from "@/Components/common/BreadCrumb";
import SEO from "@/Components/SEO";

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
    icon: <Shop/>,
    stat: "10.5k",
    title: "Sellers active our site"
  },
  {
    icon: <Dollar/>,
    stat: "33k",
    title: "Monthly Product Sale"
  },
  {
    icon: <ShoppingBag/>,
    stat: "45.5k",
    title: "Customers active on our site"
  },
  {
    icon: <MoneyBag/>,
    stat: "25k",
    title: "Annual gross sale in our site"
  }
]
function About() {
  return (
    <>
     <SEO
        title="About Us | Exclusive"
        description="Learn more about Exclusive — our story, our mission, and what makes us your trusted destination for premium products."
        url="/about"
      />
    <div className={styles.container}>
      <Breadcrumbs chain={[{ title: "Home", path: "/"}, { title: "About Us" }]} />
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


        <div className={styles.statsSection} >
          {statsData.map((stat) =>
          
              <Card key={stat.title} className={styles.statsSection__card} variant="outlined">
                <IconContainer className={styles.icon} icon={stat.icon} />

                <h3>{stat.stat}</h3>
                <p className={styles.titleRegular}>{stat.title}</p>
              </Card>
         
          )}
        </div>

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

                  <Meta title={ <h3 className={styles.headingMedium}>{member.name}</h3>}
                        description={<p className={styles.titleRegular}>{member.role}</p>} />
                  
                  <div className={styles.socials}>
                    <a href="#"><RiTwitterLine  size={24} /></a>
                    <a href="#"><RiInstagramLine size={24}  /></a>
                    <a href="#"><RiLinkedinLine size={24} /></a>
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

    </>
  );
};

export default About;
