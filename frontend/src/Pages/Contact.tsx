import styles from "@/styles/pages/contact.module.scss";
import ContactForm from "@/Components/Contact/ContactForm";
import ContactInfo from "@/Components/Contact/ContactInfo";
import Breadcrumbs from "@/Components/common/BreadCrumb";


function Contact() {

  return (
    <div className={styles.container}>
      <Breadcrumbs chain={[{ title: "Home", path: "/"}, { title: "Contact" }]} />
      <div className={styles.contactContainer}>
        <div className={styles.infoBox}>
          <ContactInfo />
        </div>
        <div className={styles.formBox}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
