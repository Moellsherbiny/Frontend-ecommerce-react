import React, { useEffect, useState } from "react";
import { Typography, Radio,  Image, Space } from "antd";
import styles from "@/styles/components/CheckOut/ReviewOrder.module.scss";
import CouponCode from "@/Components/Products/CoponCode"
import visaIco from "@/assets/images/banks/Visa.png"
import masterCardIco from "@/assets/images/banks/image 31.png"
import bkashIco from "@/assets/images/banks/Bkash.png"
import NagadIco from "@/assets/images/banks/Nagad.png"
const {  Text } = Typography;

interface Props {
  cart: any[];
  onPaymentChange?: (method: string) => void;
  shippingData?: any;
  paymentData?: any;
  full?: boolean;
  compact?: boolean;
}

const ReviewOrder: React.FC<Props> = ({ cart, onPaymentChange }) => {
  const [paymentMethod, setPaymentMethod] = useState("cash");

  useEffect(() => {
    if (onPaymentChange) onPaymentChange(paymentMethod);
  }, [paymentMethod]);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className={styles.reviewCard}>
      <div className={styles.cartList}>
        {cart.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <div className={styles.productInfo}>
              <Image
                src={item.image}
                alt={item.name}
                width={60}
                height={60}
                style={{ objectFit: "contain" }}
              />
              <Text strong>{item.name}</Text>
            </div>

            <Text>${item.price * item.quantity}</Text>
          </div>
        ))}
      </div>


      <div className={styles.summaryTotals}>
        <div className={styles.summaryItem}>
          <Text>Subtotal:</Text>
          <Text>${subtotal.toFixed(2)}</Text>
        </div>
        <div className={styles.summaryItem}>
          <Text>Shipping:</Text>
          <Text >Free</Text>
        </div>
        <div className={styles.summaryItem}>
          <Text>Total:</Text>
          <Text>${total.toFixed(2)}</Text>
        </div>
      </div>

      

      <div className={styles.paymentSection}>
       
        <Radio.Group
          onChange={(e) => setPaymentMethod(e.target.value)}
          value={paymentMethod}
          className={styles.paymentOptions}
          
        >
          <Space className={styles.paymentOptions__item}>
            <Radio style={{color:"black"}} value="cash">Cash on Delivery</Radio>
            <div className={styles.paymentOptions__item__icons}>
              <img src={visaIco} alt="Visa" />
              <img src={masterCardIco} alt="MasterCard" />
              <img src={bkashIco} alt="bkash" />
              <img src={NagadIco} alt="Nagad" />
            </div>
          </Space>

          <Radio value="bank">Bank Transfer</Radio>
        </Radio.Group>
      </div>

      <CouponCode />
    </div>
  );
};

export default ReviewOrder;
