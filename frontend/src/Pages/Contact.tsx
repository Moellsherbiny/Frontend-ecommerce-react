import styles from "@/styles/pages/contact.module.scss";
import ContactForm from "@/Components/Contact/ContactForm";
import ContactInfo from "@/Components/Contact/ContactInfo";
import Breadcrumbs from "@/Components/common/BreadCrumb";
import SEO from "@/Components/SEO";


function Contact() {

  return (
    <>
      <SEO
        title="Contact Us | Exclusive"
        description="Get in touch with Exclusive. We’re here to help you with any questions, feedback, or support requests."
        url="/contact"
      />
      <div className={styles.container}>
        <Breadcrumbs chain={[{ title: "Home", path: "/" }, { title: "Contact" }]} />
        <div className={styles.contactContainer}>
          <div className={styles.infoBox}>
            <ContactInfo />
          </div>
          <div className={styles.formBox}>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
