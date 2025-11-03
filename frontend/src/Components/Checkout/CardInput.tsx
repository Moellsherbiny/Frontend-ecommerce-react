import { useState } from "react";
import { CardElement } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import styles from "@/styles/components/CheckOut/paymentForm.module.scss";

const cardStyle = {
  
  style: {
    base: {
      color: "#32325d",
      fontSize: "16px",
      fontFamily: "Poppins, sans-serif",
      "::placeholder": {
        color: "#a0a0a0",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

export default function CardInput() {
  const [focused, setFocused] = useState(false);
  const paymentMethod = useSelector((state: RootState) => state.payment.method);
  const disabled = paymentMethod === "cash";
  return (
    <div
      className={`${styles.cardWrapper} 
                  ${focused ? styles.focused : ""}
                  ${disabled ? styles.disabled : ""}
                  `}
    >
      <CardElement
        options={{...cardStyle, disabled: disabled}}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}
