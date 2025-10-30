import { Link } from "react-router";
import AuthLayout from "./AuthLayout";
import authStyles from "@/styles/components/auth.module.scss";
import { Button } from "antd";
import Input from "../common/Input";
import type { AppDispatch, RootState } from "@/app/store";
import { loginUser } from "@/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/validations/authSchema";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type LoginForm = yup.InferType<typeof loginSchema>;

function SignIn() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  
  } = useForm<LoginForm>({
    resolver: yupResolver(loginSchema),
    mode: "onChange", // ✅ Validation while typing
  });

  const onSubmit = (data: LoginForm) => {
    dispatch(loginUser({ email: data.identifier, password: data.password }));
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(onSubmit)} className={authStyles.form}>
        <div className={authStyles.heading}>
          <h3 className={authStyles.headingMedium}>Log in to Exclusive</h3>
          <p className={authStyles.titleRegular}>Enter your details below</p>
        </div>

      
        <Input
          type="text"
          placeholder="Email or Phone Number"
          {...register("identifier")}
        />
        {errors.identifier && (
          <p className={authStyles.errorText}>{errors.identifier.message}</p>
        )}

        
        <Input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && (
          <p className={authStyles.errorText}>{errors.password.message}</p>
        )}

        <div className={authStyles.actions}>
          <div className={authStyles.LoginButtons}>
            <Button
              type="primary"
              htmlType="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log In"}
            </Button>

            <Link to="/auth/forgot-password">Forget Password?</Link>
          </div>
        </div>

        {/* ✅ Server Error */}
        {error && (
          <p className={authStyles.errorText} style={{ marginTop: "10px" }}>
            {error}
          </p>
        )}
      </form>
    </AuthLayout>
  );
}

export default SignIn;
