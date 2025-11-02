import React from "react";
import { Card, Typography, Divider } from "antd";
import styles from "@/styles/components/Account/sidebar.module.scss";
const { Title, Text } = Typography;

const AccountSidebar: React.FC = () => {
  return (
    <Card variant="borderless" className={styles.sidebarCard}>
      <Title level={5}>Manage My Account</Title>
      <div style={{ marginLeft: 10, marginTop: 10 }}>
        <Text style={{ color: "#d43838" }}>My Profile</Text><br />
        <Text type="secondary">Address Book</Text><br />
        <Text type="secondary">My Payment Options</Text>
      </div>

      <Divider />

      <Title level={5}>My Orders</Title>
      <div style={{ marginLeft: 10, marginTop: 10 }}>
        <Text type="secondary">My Returns</Text><br />
        <Text type="secondary">My Cancellations</Text>
      </div>

      <Divider />

      <Title level={5}>My Wishlist</Title>
    </Card>
  );
};

export default AccountSidebar;
