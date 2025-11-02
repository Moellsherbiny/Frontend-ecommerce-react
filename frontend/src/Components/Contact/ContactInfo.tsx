import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import styles from "@/styles/pages/contact.module.scss";

function ContactInfo() {
  return (
    <>
      <div className={styles.infoItem}>
        <div className={styles.icon}>
          <PhoneOutlined />
        </div>
        <div>
          <h4>Call To Us</h4>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
        </div>
      </div>
      <hr />
      <div className={styles.infoItem}>
        <div className={styles.icon}>
          <MailOutlined />
        </div>
        <div>
          <h4>Write To Us</h4>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>
      </div>
    </>
  )
}

export default ContactInfo
