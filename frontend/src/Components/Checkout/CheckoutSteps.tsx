import React, { useState } from "react";
import { Steps, Button, message } from "antd";
import { useDispatch } from "react-redux";
import { clearCart } from "@/features/products/cartSlice";
import ShippingForm from "@/Components/Checkout/ShippingForm";
import PaymentForm from "@/Components/Checkout/PaymentForm";
import ConfirmOrder from "@/Components/Checkout/ConfirmOrder";
import styles from "@/styles/components/Checkout/Checkout.module.scss";

const CheckoutSteps = () => {
  const [current, setCurrent] = useState(0);
  const [shippingData, setShippingData] = useState<any>(null);
  const [paymentData, setPaymentData] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const dispatch = useDispatch();

  const stepComponents = [
    <ShippingForm key="shipping" onNext={setShippingData} />,
    <PaymentForm
      key="payment"
      onNext={setPaymentData}
      disabled={paymentMethod === "cash"}
    />,
    <ConfirmOrder key="confirm" />,
  ];

  const stepTitles = [
    { title: "Shipping" },
    { title: "Payment" },
    { title: "Review" },
  ];

  const next = () => {
    if (current < stepComponents.length - 1) setCurrent((p) => p + 1);
  };

  const prev = () => setCurrent((p) => p - 1);

  const handleConfirmOrder = () => {
    message.success("Order confirmed!");
    dispatch(clearCart());
    setTimeout(() => {
      window.location.href = "/cart";
    }, 1200);
  };

  return (
    <>
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
    </>
  );
};

export default CheckoutSteps;
