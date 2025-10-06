import { Link } from "react-router"
import AuthLayout from "./AuthLayout"
import authStyles from "./auth.module.scss" 
import { Button } from "antd"
import Input from "../common/Input"

function SignIn() {
  return (
    <AuthLayout >
      <form className={authStyles.form}>
        <div className={authStyles.heading}>
          <h3 className={authStyles.headingMedium}>Log in to Exclusive</h3>
          <p className={authStyles.titleRegular}>Enter your details below</p>
        </div>
        <Input type="text" placeholder="Email or Phone Number" onChange={(e) => console.log(e.target.value)} />
        <Input type="password" placeholder="Password" />

        <div className={authStyles.actions}>
          <div className={authStyles.LoginButtons}>
            <Button type="primary" htmlType="submit">
              Log In
            </Button>
           
              <Link to="/auth/forgot-password">
                Forget Password?
              </Link>
          
          </div>

        </div>
      </form>
    </AuthLayout>
  )
}

export default SignIn
