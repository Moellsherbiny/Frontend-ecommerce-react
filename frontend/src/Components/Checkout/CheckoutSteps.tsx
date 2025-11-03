import { useState } from "react";
import { Steps, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "@/features/products/cartSlice";
import { setStepStatus } from "@/features/products/paymentSlice";
import type { RootState, AppDispatch } from "@/app/store";
import ShippingForm from "@/Components/Checkout/ShippingForm";
import PaymentForm from "@/Components/Checkout/PaymentForm";
import ConfirmOrder from "@/Components/Checkout/ConfirmOrder";
import styles from "@/styles/components/Checkout/Checkout.module.scss";
import { useNavigate } from "react-router";

const CheckoutSteps = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { shippingData, paymentData, stepsStatus, method } = useSelector(
    (state: RootState) => state.payment
  );

  const stepComponents = [
    <ShippingForm key="shipping" />,
    <PaymentForm key="payment" />,
    <ConfirmOrder key="confirm" />,
  ];

  const stepTitles = [
    { title: "Shipping", status: stepsStatus.shipping },
    { title: "Payment", status: stepsStatus.payment },
    { title: "Review", status: stepsStatus.review },
  ];

  const validateStep = (): boolean => {
    if (current === 0) {
      if (!shippingData || !shippingData.fullName || !shippingData.address) {
        message.error("Please complete shipping information.");
        dispatch(setStepStatus({ step: "shipping", status: "error" }));
        return false;
      }
      dispatch(setStepStatus({ step: "shipping", status: "finish" }));
      dispatch(setStepStatus({ step: "payment", status: "process" }));
    }

    if (current === 1) {
      if(method === "card"){ 
        if (!paymentData || !paymentData.nameOnCard) {
          message.error("Please enter valid payment details.");
          dispatch(setStepStatus({ step: "payment", status: "error" }));
          return false;
        }
      }

      dispatch(setStepStatus({ step: "payment", status: "finish" }));
      dispatch(setStepStatus({ step: "review", status: "process" }));
    }

    return true;
  };

  const next = () => {
    if (validateStep() && current < stepComponents.length - 1) {
      setCurrent((p) => p + 1);
    }
  };

  const prev = () => setCurrent((p) => p - 1);

  const handleConfirmOrder = () => {
    dispatch(setStepStatus({ step: "review", status: "finish" }));
    message.success("Order confirmed!");
    dispatch(clearCart());
    setTimeout(() => {
      navigate("/cart");
    }, 1200);
  };

  return (
    <>
      <Steps current={current} items={stepTitles}  />
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
