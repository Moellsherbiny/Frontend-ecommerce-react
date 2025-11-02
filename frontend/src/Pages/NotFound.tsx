import React from "react";
import { Button } from "antd";
import { Link } from "react-router";
import styles from "@/styles/pages/notFound.module.scss";
import Breadcrumbs from "@/Components/common/BreadCrumb";

const NotFound: React.FC = () => {
  return (
    <div className={styles.container}>
      <Breadcrumbs chain={[{ title: "Home", path: "/"}, { title: "404 Error" }]} />
      <div className={styles.content}>
        <h1 className={styles.headingMedium}>404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>

        <Link to="/">
          <Button type="primary" className={styles.homeBtn}>Back to home page</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
