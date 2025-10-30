import React from "react";
import { Form, Input, Button } from "antd";

interface Props {
  onNext: (data: any) => void;
  disabled?: boolean;
}

const PaymentForm: React.FC<Props> = ({ onNext, disabled }) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    onNext(values);
  };

  return (
    <Form
      layout="vertical"
      form={form}
      disabled={disabled}
      onFinish={onFinish}
      className="payment-form"
    >
      <Form.Item
        name="cardNumber"
        label="Card Number"
        rules={[{ required: true, message: "Please enter card number" }]}
      >
        <Input placeholder="4242 4242 4242 4242" maxLength={19} />
      </Form.Item>

      <Form.Item
        name="expiry"
        label="Expiry Date"
        rules={[{ required: true, message: "Enter expiry date" }]}
      >
        <Input placeholder="MM/YY" maxLength={5} />
      </Form.Item>

      <Form.Item
        name="cvc"
        label="CVC"
        rules={[{ required: true, message: "Enter CVC" }]}
      >
        <Input placeholder="123" maxLength={3} />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Save & Continue
      </Button>
    </Form>
  );
};

export default PaymentForm;
