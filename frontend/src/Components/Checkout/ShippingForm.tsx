import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox, type CheckboxProps } from "antd";

interface Props {
  onNext: (data: any) => void;
}

const ShippingForm: React.FC<Props> = ({ onNext }) => {
  const [form] = Form.useForm();
  const [saveInfo, setSaveInfo] = React.useState(false);

  
  useEffect(() => {
    const savedData = localStorage.getItem("shippingData");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      form.setFieldsValue(parsed);
    }
  }, [form]);

  
  const onChange: CheckboxProps["onChange"] = (e) => {
    const checked = e.target.checked;
    setSaveInfo(checked);

    if (checked) {
      const currentData = form.getFieldsValue();
      localStorage.setItem("shippingData", JSON.stringify(currentData));
    } else {
      localStorage.removeItem("shippingData");
    }
  };

  
  const onFinish = (values: any) => {
    if (saveInfo) {
      localStorage.setItem("shippingData", JSON.stringify(values));
    }
    onNext(values);
  };

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onFinish}
   
      variant="filled"
    >
      <Form.Item
        name="fullName"
        label="Full Name"
        rules={[{ required: true, message: "Please enter your name" }]}
      >
        <Input placeholder="John Doe" />
      </Form.Item>

      <Form.Item
        name="companyName"
        label="Company Name"
        rules={[{ required: true, message: "Please enter the company name" }]}
      >
        <Input placeholder="Company" />
      </Form.Item>

      <Form.Item
        name="streetAddress"
        label="Street Address"
        rules={[{ required: true, message: "Please enter your street address" }]}
      >
        <Input placeholder="123 Main St" />
      </Form.Item>

      <Form.Item
        name="address"
        label="Address"
        rules={[{ required: true, message: "Please enter your address" }]}
      >
        <Input placeholder="District, Area..." />
      </Form.Item>

      <Form.Item
        name="apartment"
        label="Apartment, floor, etc. (optional)"
      >
        <Input placeholder="Apartment, Floor..." />
      </Form.Item>

      <Form.Item
        name="city"
        label="Town/City"
        rules={[{ required: true, message: "Please enter your city" }]}
      >
        <Input placeholder="Cairo" />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          { required: true, message: "Please enter your phone number" },
          { pattern: /^[0-9]+$/, message: "Phone must contain only digits" },
        ]}
      >
        <Input placeholder="01000000000" maxLength={11} />
      </Form.Item>

      <Checkbox onChange={onChange} checked={saveInfo}>
        Save this information for faster check-out next time
      </Checkbox>

      <Button type="primary" htmlType="submit" style={{ marginTop: 16 }}>
        Save & Continue
      </Button>
    </Form>
  );
};

export default ShippingForm;
