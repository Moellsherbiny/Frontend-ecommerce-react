import React from "react";
import { Row, Col, Typography } from "antd";
import AccountSidebar from "./Sidebar";
import styles from "@/styles/components/Account/accountLayout.module.scss";
import Breadcrumbs from "../common/BreadCrumb";
import { useSelector} from "react-redux";
import type { RootState } from "@/app/store";
import { Navigate } from "react-router";

const { Text } = Typography;

const AccountLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isLoggedIn } = useSelector((state: RootState) => state.auth);
  if (!isLoggedIn){
    return <Navigate to="/"/>
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <Breadcrumbs chain={[{title:"Home", path:"/"}, {title:"Account" }]} />
      <Text className={styles.title}>Welcome! <span>{user?.name || "User"}!</span></Text>
      </div>
      <Row gutter={[32, 32]} style={{ marginTop: 40 }}>
      <Col xs={24} md={6}>
        <AccountSidebar />
      </Col>
      <Col xs={24} md={18}>
        {children}
      </Col>
    </Row>
    </div>
  );
};

export default AccountLayout;
