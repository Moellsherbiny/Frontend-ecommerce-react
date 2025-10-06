import React from "react";
import styles from "../../styles/components/footer.module.scss";
import { Link } from "react-router"
import googlePlay from "../../assets/images/google-play.png";
import appStore from "../../assets/images/app-store.png";
import { GoPaperAirplane } from "react-icons/go";

// Account Links
const accountLinks = [
  { label: "My Account", to: "#" },
  { label: "Login / Register", to: "#" },
  { label: "Cart", to: "#" },
  { label: "Wishlist", to: "#" },
  { label: "Shop", to: "#" },
];

const quickLinks = [
  { label: "Privacy Policy", to: "#" },
  { label: "Terms Of Use", to: "#" },
  { label: "FAQ", to: "#" },
  { label: "Contact", to: "#" },
];


const socialLinks = [
  { icon: "fa-facebook-f", to: "#" },
  { icon: "fa-twitter", to: "#" },
  { icon: "fa-instagram", to: "#" },
  { icon: "fa-linkedin-in", to: "#" },
];




const Footer: React.FC = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>

          <div className={styles.footerContent}>

            <div className={styles.section}>
              <h4 className={styles.headingBold} >Exclusive</h4>
              <div className={styles.sectionContent}>
                <h5 className={styles.titleMedium} >Subscribe</h5>
                <span className={styles.titleRegular}>Get 10% off your first order</span>
                
                <form className={styles.subscribeForm}>
                  <input type="email" placeholder="Enter your email" required />
                  <button type="submit" >
                   <GoPaperAirplane size={24} />
                  </button>
                </form>
              
              </div>
            </div>

            {/* Support */}
            <div className={styles.section}>
              <h5 className={styles.titleMedium} >Support</h5>
              <div className={styles.sectionContent}>

                <ul>
                  <li>
                    <p className={styles.titleRegular}>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                  </li>
                  <li>
                    <Link to="mailto:exclusive@gmail.com">exclusive@gmail.com</Link>
                  </li>
                  <li>
                    <Link to="tel:+8801234567890">+8801234567890</Link>
                  </li>
                </ul>
              </div>

            </div>

            {/* Account */}
            <div className={styles.section}>
              <h5 className={styles.titleMedium} >Account</h5>
              <div className={styles.sectionContent}>
                <ul>
                  {accountLinks.map((link, idx) => (
                    <li key={idx}>
                      <Link to={link.to}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.section}>
              <h5 className={styles.titleMedium} >Quick Links</h5>
              <div className={styles.sectionContent}>

                <ul>
                  {quickLinks.map((link, idx) => (
                    <li key={idx}>
                      <Link to={link.to}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Download App */}
            <div className={styles.section}>
              <h5 className={styles.titleMedium} >Download App</h5>
              <div className={styles.sectionContent}>
                <span className={styles.titleMedium12PX}>Save $3 with App New User Only</span>

                <div className={styles.downloadLinks}>
                  <img src={googlePlay} alt="Google Play Store" />
                  <img src={appStore} alt="Apple App Store" />
                </div>

                <div className={styles.socialLinks}>
                  {socialLinks.map((link, idx) => (
                    <Link to={link.to} key={idx}>
                      <i className={`fa-brands ${link.icon}`}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className={styles.bottomFooter}>
          <p>&copy; copyright Exclusive 2025. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
