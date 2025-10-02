import React from "react";
import { Footer as AntFooter } from "antd/es/layout/layout";
import { Row, Col, Typography, Input, Button, Space } from "antd";
import styles from "../../styles/components/footer.module.scss";
import { Link } from "react-router";
const { Title, Text } = Typography;
import googlePlay from "../../assets/images/google-play.png";
import appStore from "../../assets/images/app-store.png";

// Account Links
export const accountLinks = [
  { label: "My Account", to: "#" },
  { label: "Login / Register", to: "#" },
  { label: "Cart", to: "#" },
  { label: "Wishlist", to: "#" },
  { label: "Shop", to: "#" },
];

export const quickLinks = [
  { label: "Privacy Policy", to: "#" },
  { label: "Terms Of Use", to: "#" },
  { label: "FAQ", to: "#" },
  { label: "Contact", to: "#" },
];


export const socialLinks = [
  { icon: "fa-facebook-f", to: "#" },
  { icon: "fa-twitter", to: "#" },
  { icon: "fa-instagram", to: "#" },
  { icon: "fa-linkedin-in", to: "#" },
];




const Footer: React.FC = () => {
  return (
    <>
    <AntFooter className={styles.footer}>
      {/* Main Content */}
      <Row gutter={[32, 32]}  className={styles.footerContent}>
        {/* Exclusive */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4}>Exclusive</Title>
          <Title level={5}>Subscribe</Title>
          <Text>Get 10% off your first order</Text>
          <form className={styles.subscribeForm}>
            <Input type="email" placeholder="Enter your email" required />
            <Button type="primary" htmlType="submit">
              <i className="fa-solid fa-paper-plane"></i>
            </Button>
          </form>
        </Col>

        {/* Support */}
        <Col xs={24} sm={12} md={6}>
          <Title color="#fff" level={5}>Support</Title>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <br />
          <Link to="mailto:exclusive@gmail.com">exclusive@gmail.com</Link>
          <br />
          <Link to="tel:+8801234567890">+8801234567890</Link>
        </Col>

        {/* Account */}
        <Col xs={24} sm={12} md={4}>
          <Title level={5}>Account</Title>
          <ul>
            {accountLinks.map((link, idx) => (
              <li key={idx}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </Col>

        {/* Quick Links */}
        <Col xs={24} sm={12} md={4}>
          <Title level={5}>Quick Links</Title>
          <ul>
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </Col>

        {/* Download App */}
        <Col xs={24} sm={12} md={4}>
          <Title level={5}>Download App</Title>
          <p>Save $3 with App New User Only</p>
          <Space direction="vertical" style={{ marginTop: "1rem", width: "75%"}}>
            <img src={googlePlay} alt="Google Play Store" />
            <img src={appStore} alt="Apple App Store" />
          </Space>
          <div className={styles.socialLinks}>
            {socialLinks.map((link, idx) => (
              <Link to={link.to} key={idx}>
                <i className={`fa-brands ${link.icon}`}></i>
              </Link>
            ))}
          </div>
        </Col>
      </Row>

    </AntFooter>
      {/* Bottom Footer */}
      <div className={styles.bottomFooter}>
        <p>&copy; copyright Exclusive 2025. All rights reserved.</p>
      </div>
                </>
  );
};

export default Footer;
