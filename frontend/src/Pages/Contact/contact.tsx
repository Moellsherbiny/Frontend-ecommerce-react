import React from "react";
import { Form, Input, Button } from "antd";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import styles from "./contact.module.scss";


const { TextArea } = Input;

const ContactSection: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Form Values:", values);
  };

  return (
    <>
    <div className={styles.contactContainer}>

      {/* Left Side - Contact Info */}
      <div className={styles.infoBox}>
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
            <p>
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className={styles.formBox}>
        <Form layout="vertical" onFinish={onFinish} >
          <div className={styles.inputGroup}>
            <Form.Item
              name="name"
              
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input size="large" placeholder="Your Name *" />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <Input size="large" placeholder="Your Email *" />
            </Form.Item>

            <Form.Item
              name="phone"
              rules={[{ required: true, message: "Please enter your phone" }]}
            >
              <Input size="large" placeholder="Your Phone *" />
            </Form.Item>
          </div>

          <Form.Item name="message">
            <TextArea
              placeholder="Your Message"
              autoSize={{ minRows: 8, maxRows: 6 }}
              
            />
          </Form.Item>

          <Form.Item style={{ textAlign: "right" }}>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.submitBtn}
            >
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
              </>
  );
};

export default ContactSection;
