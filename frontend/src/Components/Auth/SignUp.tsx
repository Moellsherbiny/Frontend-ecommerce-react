import { Button } from "antd"
import AuthLayout from "@/Components/Auth/AuthLayout"
import Input from "@/Components/common/Input";
import authStyles from "@/Components/Auth/auth.module.scss"
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";


function SignUp() {
  return (
    <AuthLayout >
      <form className={authStyles.form}>
        <div className={authStyles.heading}>
          <h3 className={authStyles.headingMedium}>Create an account</h3>
          <p className={authStyles.titleRegular}>Enter your details below</p>
        </div>
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Email or Phone Number" onChange={(e) => console.log(e.target.value)} />
        <Input type="password" placeholder="Password" />

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
