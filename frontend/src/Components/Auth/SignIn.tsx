import { Link } from "react-router";
import AuthLayout from "./AuthLayout";
import authStyles from "@/styles/components/auth.module.scss";
import { Button, Form, Input, message } from "antd";

import type { AppDispatch, RootState } from "@/app/store";
import { loginUser } from "@/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/validations/authSchema";
import * as yup from "yup";

type LoginForm = yup.InferType<typeof loginSchema>;

function SignIn() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const [messageApi, contextHolder] = message.useMessage();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      await dispatch(
        loginUser({ identifier: data.identifier, password: data.password })
      );
      messageApi.open({
        type: "success",
        content: "Logged in successfully!",
      });
    } catch (err: any) {
      messageApi.open({
        type: "error",
        content: err?.message || "Login failed",
      });
    }
  };

  return (
    <AuthLayout>
      {contextHolder}
      <div className={authStyles.formContainer}>
        <div className={authStyles.heading}>
          <h3 className={authStyles.headingMedium}>Log in to Exclusive</h3>
          <p className={authStyles.titleRegular}>Enter your details below</p>
        </div>

        
        <Form
          layout="vertical"
          onFinish={handleSubmit(onSubmit)}
          className={authStyles.form}
          variant="underlined"
        >
          
          <Form.Item
            validateStatus={errors.identifier ? "error" : ""}
            help={errors.identifier?.message}
          >
            <Controller
              name="identifier"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Enter your email or phone number"
                  className={authStyles.inputField}
                />
              )}
            />
          </Form.Item>

          
          <Form.Item
            validateStatus={errors.password ? "error" : ""}
            help={errors.password?.message}
          >
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input.Password
                  {...field}
                  placeholder="Enter your password"
                  className={authStyles.inputField}
                />
              )}
            />
          </Form.Item>

          {/* Buttons */}
          <div className={authStyles.actions}>
            <div className={authStyles.LoginButtons}>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
               
                block
              >
                Log In
              </Button>
              <Link to="/auth/forgot-password">Forget Password?</Link>
            </div>
          </div>

          {/* Server Error */}
          {error && (
            <p className={authStyles.errorText} style={{ marginTop: "10px" }}>
              {error}
            </p>
          )}
        </Form>
      </div>
    </AuthLayout>
  );
}

export default SignIn;
