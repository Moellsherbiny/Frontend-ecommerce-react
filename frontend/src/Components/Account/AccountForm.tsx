import React, { useEffect } from "react";
import { Form, Input, Button, Row, Col, Typography, Card } from "antd";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/app/store";
import { updateUser } from "@/features/auth/userSlice";
import type { User } from "@/features/auth/authTypes";
import { schema } from "@/validations/accountSchema"
const { Title } = Typography;


const ProfileForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);

  const firstName = user?.name ? user.name.split(" ")[0] : "";
  const lastName = user?.name ? user.name.split(" ")[1] || "" : "";

const { control, handleSubmit, reset, formState: { errors } } = useForm({
  resolver: yupResolver(schema),
  mode: "onBlur",
  defaultValues: {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  },
});

  useEffect(() => {
    reset({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  }, [user, reset]);

const onSubmit = (values: any) => {
  if (!user) return;
  let fullName = "";
  if (values.firstName || values.lastName)
    fullName = `${values.firstName || user.name.split(" ")[0]} ${values.lastName || user.name.split(" ")[1]}`;
 const updatedData: User = {
  id: user!.id, 
  name: fullName || user.name,
  email: values.email || user.email,
  address: values.address || user.address,
  password: values.newPassword || user.password,
  phone: user.phone,
  token: user.token,
};

  dispatch(updateUser(updatedData));
};


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

      <Form layout="vertical" onFinish={handleSubmit(onSubmit)} style={{ marginTop: 24 }} variant="filled">
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="First Name"
              validateStatus={errors.firstName ? "error" : ""}
              help={errors.firstName?.message}
            >
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <Input {...field} value={field.value ?? ""} placeholder={firstName || "First Name"} />
                )}
              />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              label="Last Name"
              validateStatus={errors.lastName ? "error" : ""}
              help={errors.lastName?.message}
            >
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <Input {...field} value={field.value ?? ""}  placeholder={lastName || "Last Name"} />
                )}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Email"
              validateStatus={errors.email ? "error" : ""}
              help={errors.email?.message}
            >
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input {...field} value={field.value ?? ""} placeholder={user?.email || "Email"} />
                )}
              />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              label="Address"
              validateStatus={errors.address ? "error" : ""}
              help={errors.address?.message}
            >
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <Input {...field} value={field.value ?? ""} placeholder={user?.address || "Address"} />
                )}
              />
            </Form.Item>
          </Col>
        </Row>

        <Title level={5} style={{ marginTop: 16 }}>
          Password Changes
        </Title>

        <Form.Item
          validateStatus={errors.currentPassword ? "error" : ""}
          help={errors.currentPassword?.message}
        >
          <Controller
            name="currentPassword"
            control={control}
            render={({ field }) => (
              <Input.Password {...field} value={field.value ?? ""} placeholder="Current Password" />
            )}
          />
        </Form.Item>

        <Form.Item
          validateStatus={errors.newPassword ? "error" : ""}
          help={errors.newPassword?.message}
        >
          <Controller
            name="newPassword"
            control={control}
            render={({ field }) => (
              <Input.Password {...field} value={field.value ?? ""} placeholder="New Password" />
            )}
          />
        </Form.Item>

        <Form.Item
          validateStatus={errors.confirmPassword ? "error" : ""}
          help={errors.confirmPassword?.message}
        >
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <Input.Password {...field} value={field.value ?? ""} placeholder="Confirm New Password" />
            )}
          />
        </Form.Item>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
          <Button htmlType="button" onClick={() => reset()}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit" danger>
            Save Changes
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default ProfileForm;
