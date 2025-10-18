import {useState} from "react"
import { Link } from "react-router"
import AuthLayout from "./AuthLayout"
import authStyles from "./auth.module.scss" 
import { Button } from "antd"
import Input from "../common/Input"
import type { AppDispatch, RootState } from "@/app/store"
import { loginUser } from "@/features/auth/authSlice"
import { useDispatch, useSelector } from "react-redux"


function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>()
  const {user, error, loading} = useSelector((state:RootState) => state.auth);
  const hndleSubmit = (e:React.FormEvent) =>{
    e.preventDefault();
    console.log(email, password);
    dispatch(loginUser({email, password}))
    if(!user)
      console.log("enter valid creds");
      
    
  }
  return (
    <AuthLayout >
      <form onSubmit={hndleSubmit} className={authStyles.form}>
        <div className={authStyles.heading}>
          <h3 className={authStyles.headingMedium}>Log in to Exclusive</h3>
          <p className={authStyles.titleRegular}>Enter your details below</p>
        </div>
        <Input type="text" placeholder="Email or Phone Number" onChange={(e) =>setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" onChange={(e) =>setPassword(e.target.value)}/>

        <div className={authStyles.actions}>
          <div className={authStyles.LoginButtons}>
            <Button type="primary" htmlType="submit" disabled={loading}>
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
