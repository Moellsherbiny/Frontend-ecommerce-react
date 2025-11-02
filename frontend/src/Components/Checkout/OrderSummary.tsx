import React, { useState } from "react";
import ReviewOrder from "@/Components/Checkout/ReviewOrder";

const OrderSummary = ({
  cart,
}: {
  cart: any[];
}) => {
  const [shippingData, setShippingData] = useState<any>(null);
  const [paymentData, setPaymentData] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState("cash");

  return (
    <ReviewOrder
      cart={cart}
      shippingData={shippingData}
      paymentData={paymentData}
      onPaymentChange={setPaymentMethod}
    />
  );
};

export default OrderSummary;
