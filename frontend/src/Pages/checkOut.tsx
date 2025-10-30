import React, { useState } from "react";
import { Steps, Button, message, Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { clearCart } from "@/features/products/cartSlice";
import ShippingForm from "@/Components/Checkout/ShippingForm";
import PaymentForm from "@/Components/Checkout/PaymentForm";
import ReviewOrder from "@/Components/Checkout/ReviewOrder";
import styles from "@/styles/components/Checkout/Checkout.module.scss";
import Breadcrumb from "@/Components/common/BreadCrumb";

const Checkout: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [shippingData, setShippingData] = useState<any>(null);
  const [paymentData, setPaymentData] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);

  const stepComponents = [
    <ShippingForm key="shipping" onNext={setShippingData} />,
    <PaymentForm key="payment" onNext={setPaymentData} disabled={paymentMethod === "cash"} />,
    <div key="confirm" style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Review & Confirm</h2>
      <p>Double-check your details and confirm your order.</p>
      <Button type="primary" onClick={() => { }}>
        Confirm Order
      </Button>
    </div>,
  ];

  const stepTitles = [{ title: "Shipping" }, { title: "Payment" }, { title: "Review" }];

  const next = () => {
    if (current < stepComponents.length - 1) setCurrent((prev) => prev + 1);
  };

  const prev = () => setCurrent((prev) => prev - 1);

  const handleConfirmOrder = () => {
    message.success("Order confirmed!");
    dispatch(clearCart());
    setTimeout(() => {
      window.location.href = "/cart";
    }, 1200);
  };

  const breadItems = [
    {title:"Account"},
    {title:"My Account"},
    {title:"Product"},
    {title:"View Cart"},
    {title:"CheckOut", path:"/checkout"},
  ]
  return (
    <div className={styles.checkout}>
      <div className="container">
      <Breadcrumb chain={breadItems}/>
        <div className={styles.checkoutCard}>
          <Row gutter={[24, 24]} justify="space-between">

            <Col xs={24} md={12} style={{padding:5}}>
              <Steps current={current} items={stepTitles} />
              <div className={styles.stepContent}>{stepComponents[current]}</div>
              <div className={styles.buttonGroup}>
                {current > 0 && (
                  <Button onClick={prev} className={styles.prevBtn}>
                    Previous
                  </Button>
                )}
                {current < stepComponents.length - 1 && (
                  <Button type="primary" onClick={next}>
                    Next
                  </Button>
                )}
                {current === stepComponents.length - 1 && (
                  <Button type="primary" onClick={handleConfirmOrder}>
                    Confirm Order
                  </Button>
                )}
              </div>
            </Col>


            <Col xs={24} md={10}>
              <ReviewOrder
                cart={cart}
                shippingData={shippingData}
                paymentData={paymentData}
                onPaymentChange={setPaymentMethod}
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
