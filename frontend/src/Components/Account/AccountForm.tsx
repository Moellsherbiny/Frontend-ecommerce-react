import React from "react";
import { Form, Input, Button, Row, Col, Typography, Card } from "antd";
import { useDispatch, useSelector} from "react-redux";
import type { AppDispatch, RootState } from "@/app/store";

const { Title } = Typography;

const ProfileForm: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  
  const onFinish = (values: any) => {
    console.log("Form values:", values);
  };

  const firstName = user?.name ? user.name.split(" ")[0] : "";
  const lastName = user?.name ? user.name.split(" ")[1] || "" : "";
  return (
    <Card
      style={{
        borderRadius: 12,
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <Title level={4} style={{ color: "#d43838" }}>
        Edit Your Profile
      </Title>

      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        style={{ marginTop: 24 }}
        variant="filled"
      >
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item label="First Name" name="firstName">
              <Input placeholder={firstName} />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="Last Name" name="lastName">
              <Input placeholder={lastName} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item label="Email" name="email">
              <Input placeholder={user?.email || "Email"} />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="Address" name="address">
              <Input placeholder={user?.address || "Address"} />
            </Form.Item>
          </Col>
        </Row>

        <Title level={5} style={{ marginTop: 16 }}>
          Password Changes
        </Title>

        <Form.Item name="currentPassword">
          <Input.Password placeholder="Current Password" />
        </Form.Item>
        <Form.Item name="newPassword">
          <Input.Password placeholder="New Password" />
        </Form.Item>
        <Form.Item name="confirmPassword">
          <Input.Password placeholder="Confirm New Password" />
        </Form.Item>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
          <Button>Cancel</Button>
          <Button type="primary" htmlType="submit" danger>
            Save Changes
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default ProfileForm;
