import React from "react";
import styles from "@/styles/components/footer.module.scss";
import { Link } from "react-router";
import { GoPaperAirplane } from "react-icons/go";
import googlePlay from "@/assets/icons/google-store.svg";
import appStore from "@/assets/icons/app-store.svg";

type FooterLink = {
  label?: string;
  to: string;
  icon?: string;
};

const accountLinks: FooterLink[] = [
  { label: "My Account", to: "#" },
  { label: "Login / Register", to: "#" },
  { label: "Cart", to: "#" },
  { label: "Wishlist", to: "#" },
  { label: "Shop", to: "#" },
];

const quickLinks: FooterLink[] = [
  { label: "Privacy Policy", to: "#" },
  { label: "Terms Of Use", to: "#" },
  { label: "FAQ", to: "#" },
  { label: "Contact", to: "#" },
];

const socialLinks: FooterLink[] = [
  { icon: "fa-facebook-f", to: "#" },
  { icon: "fa-twitter", to: "#" },
  { icon: "fa-instagram", to: "#" },
  { icon: "fa-linkedin-in", to: "#" },
];

const Footer: React.FC = () => {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    if (!email) {
      alert("Please enter your email");
      return;
    }
    console.log("Subscribed with:", email);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Subscribe Section */}
          <div className={styles.section}>
            <h4 className={styles.headingBold}>Exclusive</h4>
            <div className={styles.sectionContent}>
              <h5 className={styles.titleMedium}>Subscribe</h5>
              <span className={styles.titleRegular}>
                Get 10% off your first order
              </span>

              <form className={styles.subscribeForm} onSubmit={handleSubscribe}>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
                <button type="submit" aria-label="Subscribe">
                  <GoPaperAirplane size={20} />
                </button>
              </form>
            </div>
          </div>

          {/* Support */}
          <div className={styles.section}>
            <h5 className={styles.titleMedium}>Support</h5>
            <div className={styles.sectionContent}>
              <ul>
                <li>
                  <p className={styles.titleRegular}>
                    111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                  </p>
                </li>
                <li>
                  <Link to="mailto:exclusive@gmail.com">
                    exclusive@gmail.com
                  </Link>
                </li>
                <li>
                  <Link to="tel:+8801234567890">+8801234567890</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Account */}
          <div className={styles.section}>
            <h5 className={styles.titleMedium}>Account</h5>
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

          {/* Quick Links */}
          <div className={styles.section}>
            <h5 className={styles.titleMedium}>Quick Links</h5>
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
            <h5 className={styles.titleMedium}>Download App</h5>
            <div className={styles.sectionContent}>
              <span className={styles.titleMedium12PX}>
                Save $3 with App New User Only
              </span>

              <div className={styles.downloadLinks}>
                <img src={googlePlay} alt="Google Play Store" />
                <img src={appStore} alt="Apple App Store" />
              </div>

              <div className={styles.socialLinks}>
                {socialLinks.map((link, idx) => (
                  <Link to={link.to} key={idx} aria-label={link.icon}>
                    <i className={`fa-brands ${link.icon}`}></i>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className={styles.bottomFooter}>
        <p>&copy; Copyright Exclusive 2025. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
