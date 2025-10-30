import { Button } from "antd"
import AuthLayout from "@/Components/Auth/AuthLayout"
import Input from "@/Components/common/Input";
import authStyles from "@/styles/components/auth.module.scss";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "@/validations/authSchema";

type SignUpForm = yup.InferType<typeof signUpSchema>


function SignUp() {

  const {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm<SignUpForm>({
    resolver: yupResolver(signUpSchema),
    mode: "onChange",
  })

  const onSubmit = (data: SignUpForm) => {
    console.log(data)
  }

  return (
    <AuthLayout >
      <form onSubmit={handleSubmit(onSubmit)} className={authStyles.form}>
        <div className={authStyles.heading}>
          <h3 className={authStyles.headingMedium}>Create an account</h3>
          <p className={authStyles.titleRegular}>Enter your details below</p>
        </div>
        <Input type="text" placeholder="Name" {...register("name")} />
        {errors.name && <p className={authStyles.errorText}>{errors.name.message}</p>}
        <Input type="text" placeholder="Email or Phone Number" {...register("identifier")} />
        {errors.identifier && <p className={authStyles.errorText}>{errors.identifier.message}</p>}
        <Input type="password" placeholder="Password" {...register("password")} />
        {errors.password && <p className={authStyles.errorText}>{errors.password.message}</p>}
        

        <div className={authStyles.actions}>
          <div className={authStyles.buttons}>
            <Button type="primary" htmlType="submit">
              Create Account
            </Button>
            <Button> 
              <FcGoogle size={24} />
              Sign Up with Google
            </Button>
          </div>
          <p>
            Already have an account?
            <Link to='/auth/signin'>Log in</Link>

          </p>
        </div>
      </form>
    </AuthLayout>
  )
}

export default SignUp
