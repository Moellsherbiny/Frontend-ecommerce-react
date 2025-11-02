import React, { useState } from "react";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { Navigate } from "react-router";
import SEO from "@/Components/SEO";
import Breadcrumb from "@/Components/common/BreadCrumb";
import useAuth from "@/hooks/useAuth";
import CheckoutSteps from "@/Components/Checkout/CheckoutSteps";
import OrderSummary from "@/Components/Checkout/OrderSummary";
import styles from "@/styles/components/Checkout/Checkout.module.scss";

const Checkout: React.FC = () => {
  const { isLoggedIn } = useAuth();
  const cart = useSelector((state: RootState) => state.cart.items);

  if (!isLoggedIn) return <Navigate to="/" />;

  const breadItems = [
    { title: "Account" },
    { title: "My Account" },
    { title: "Product" },
    { title: "View Cart" },
    { title: "CheckOut", path: "/checkout" },
  ];

  return (
    <>
      <SEO
        title="Checkout | Exclusive"
        description="Complete your purchase securely on Exclusive. Fast, safe, and simple checkout process."
        url="/checkout"
      />

      <div className={styles.checkout}>
        <div className="container">
          <Breadcrumb chain={breadItems} />
          <div className={styles.checkoutCard}>
            <Row gutter={[24, 24]} justify="space-between">
              <Col xs={24} md={12} style={{ padding: 5 }}>
                <CheckoutSteps />
              </Col>

              <Col xs={24} md={10}>
                <OrderSummary cart={cart} />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
