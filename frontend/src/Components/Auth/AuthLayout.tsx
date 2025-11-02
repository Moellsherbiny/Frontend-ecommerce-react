import type { ReactNode } from "react"
import authStyles from "@/styles/components/auth.module.scss"
import AuthImage from "@/assets/images/login-register.jpg"
import useAuth from "@/hooks/useAuth"
import { Navigate } from "react-router"
function Layout({ children }: { children: ReactNode }) {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return (
      <div className={authStyles.container}>
    <div className={authStyles.authLayout} >
        <div className={authStyles.image}>
          <img src={AuthImage} alt="" />
        </div>
        {children}
      </div>
    </div>
  )
}

export default Layout
