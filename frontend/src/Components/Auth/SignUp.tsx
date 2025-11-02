import { Button, Input, Form, message } from "antd";
import AuthLayout from "@/Components/Auth/AuthLayout";
import authStyles from "@/styles/components/auth.module.scss";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "@/validations/authSchema";

import { signupUser } from "@/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch,RootState } from "@/app/store";
import type { SignupCredentials } from "@/features/auth/authTypes";

type SignUpForm = yup.InferType<typeof signUpSchema>;

function SignUp() {
  const dispatch = useDispatch<AppDispatch>();
  const {  loading, error } = useSelector((state: RootState) => state.auth);
  const [messageApi, contextHolder] = message.useMessage();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: yupResolver(signUpSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: SignUpForm) => {
    console.log("Sign Up Data:", data);
    let user: SignupCredentials = {
      name: data.name,
      identifier: data.identifier,
      password: data.password,
    }
    try{

      await dispatch(signupUser(user));
      messageApi.open({
        type: "success",
        content: "Account created successfully!",
      });
    } catch(err: any) {
      messageApi.open({
        type: "error",
        content: err?.message || error,
      });
    }

  };

  return (
    <AuthLayout>
      {contextHolder}
      <div className={authStyles.formContainer}>
        <div className={authStyles.heading}>
          <h3 className={authStyles.headingMedium}>Create an account</h3>
          <p className={authStyles.titleRegular}>Enter your details below</p>
        </div>

        
        <Form
          layout="vertical"
          onFinish={handleSubmit(onSubmit)}
          className={authStyles.form}
          variant="underlined"
        >
       
          <Form.Item
            
            validateStatus={errors.name ? "error" : ""}
            help={errors.name?.message}
          >
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Enter your full name"
                  className={authStyles.inputField}
                />
              )}
            />
          </Form.Item>

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
            <div className={authStyles.buttons}>
              <Button
                type="primary"
                htmlType="submit"
                block
                loading={loading}
              >
                Create Account
              </Button>

              <Button icon={<FcGoogle size={20} />} block>
                Sign Up with Google
              </Button>
            </div>

            <p style={{ textAlign: "center", marginTop: "1rem" }}>
              Already have an account?{" "}
              <Link to="/auth/signin">Log in</Link>
            </p>
          </div>
        </Form>
      </div>
    </AuthLayout>
  );
}

export default SignUp;
