import { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import {schema} from "@/validations/paymentSchema"
import CardInput from "./CardInput";

interface FormValues {
  cardName: string;
}

function PaymentForm() {
  const paymentMethod = useSelector((state: RootState) => state.payment.method);
  const disabled = paymentMethod === "cash";
  
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  
  const onSubmit = async (data: FormValues) => {
    if (!stripe || !elements) {
      message.error("Stripe not loaded yet!");
      return;
    }

    setLoading(true);
    message.loading("Processing your payment...", 1);

    try {
      const cardElement = elements.getElement(CardElement);
      if (!cardElement) throw new Error("Card element not found");

      // هنا هتعمل الـ PaymentIntent من السيرفر بتاعك
      // في المثال ده بنعمل simulation بس
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: { name: data.cardName },
      });

      if (error) {
        throw new Error(error.message);
      }

      messageApi.open({
        type: "success",
        content: `Payment successful! (${paymentMethod.id})`,
      });
    } catch (err: any) {
      messageApi.open({
        type: "error",
        content: err.message || "Payment failed!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form layout="vertical" disabled={disabled || loading} variant="filled" onFinish={handleSubmit(onSubmit)}>
      {contextHolder}

      {/* Name on card */}
      <Form.Item
        label="Card Holder Name"
        validateStatus={errors.cardName ? "error" : ""}
        help={errors.cardName?.message}
      >
        <Controller
          name="cardName"
          control={control}
          render={({ field }) => <Input {...field} placeholder="e.g. Mohamed Elsherbiny" />}
        />
      </Form.Item>

      
     <Form.Item label="Card Details">  
          <CardInput/> 
      </Form.Item>

      <Button type="primary" htmlType="submit" loading={loading} disabled={!stripe}>
        Save & Continue
      </Button>
    </Form>
  );
}

export default PaymentForm;
